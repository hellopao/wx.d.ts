"use strict";

const fs = require('fs');

const cheerio = require('cheerio');
const request = require('request');

const Types = {
    "string": "string",
    "number": "number",
    "boolean": "boolean",
    "function": "Function",
    "object": "any",
    "callback": "Function",
    "stringarray": "string[]",
	"float": "number",
	"int": "number",
	"dateint": "number",
	"integer": "number",
	"array": "Array<any>",
	"object/string": "any"
};

const ApiUrl = "http://mp.weixin.qq.com/debug/wxadoc/dev/api/";

const getPageData = function(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res.body);
        })
    })
};

const getApiList = function() {
    return getPageData(ApiUrl)
        .then(body => {
            const $ = cheerio.load(body);
            let apiList = [];

            $('.markdown-section').find('p').filter((index,item) => {
                // 接口类别
                return $(item.next).is('table');
            }).each((index,item) => {
                let apis = [];
                // 分类接口列表
				if ($(item).text() !== "数据 API 列表：") {
					$(item.next).find('tbody tr').each((_, el) => {
						apis.push({
							name: $(el).find('a').text(),
							link: $(el).find('a').attr('href'),
							description: $(el).find('td').last().text()
						})
					});

					apiList.push({
						name: $(item).text(),
						items: apis
					})
				} else {
					apiList.push({
						name: $(item).text(),
						items: [{
							name: "wx.setStorage",
							link: "data.html",
							description: "将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。"
						},{
							name: "wx.setStorageSync",
							link: "data.html",
							description: "将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。"
						},{
							name: "wx.getStorage",
							link: "data.html",
							description: "从本地缓存中异步获取指定 key 对应的内容。"
						},{
							name: "wx.getStorageSync",
							link: "data.html",
							description: "从本地缓存中同步获取指定 key 对应的内容。"
						},{
							name: "wx.clearStorage",
							link: "data.html",
							description: "清理本地数据缓存。"
						},{
							name: "wx.clearStorageSync",
							link: "data.html",
							description: "同步清理本地数据缓存"

						}]
					})
				}
            })

            return apiList;

        })
        .catch(err => {
            console.log(err)
        })
}

const getApi = function(api) {
    return getPageData(`${ApiUrl}${api.link}`)
        .then(body => {
			
            const $ = cheerio.load(body);
            let params = [];
            const el = $('.markdown-section').find('h3').filter((_, item) => {
                return $(item).text().startsWith(api.name);
            });
            
            el.text().replace(/\(([^\)]+)\)/, (str, paramStr) => {
                paramStr.split(',').forEach((type, index) => {
                    params[index] = {type, keys: []}
                    let table = el.nextAll().filter((_,next) => {
						return $(next).is('table') && _ <= 4;	
					}).first();
                    if (table && table.is('table')) {
                        table.find('tbody tr').each((_, item) => {
                            const tds = $(item).find('td');
                            params[index].keys.push({
                                name: tds.eq(0).text(),
                                type: tds.eq(1).text(),
                                required: tds.eq(2).text(),
                                description: tds.eq(3).text()
                            })
                        })
                    }
                });
            });

            return params;

        })
};

getApiList()

    .then(list => {
        return Promise.all(list.map(apis => {
            return Promise.all(apis.items.map(api => {
                return getApi(api)
                    .then(detail => {
                        return Object.assign({}, api, {detail})
                    }) 
            }))
            .then(items => {
                return {
                    name: apis.name,
                    items
                }
            })
            
        }))
    })
    .then(list => {
        let dts = `
            declare var wx: {

        `;

        list.forEach(cat => {
            dts += `
                // # ${cat.name} #
            `;

            cat.items.forEach(item => {
                const funcName = item.name.replace(/^wx\./,'');
                dts += `
                /**
                 * ${item.description}
                 */
                ${funcName}(`
                item.detail.forEach((detail,i) => {
                    if (detail.type === "OBJECT") {
                        dts += `obj: {`;
                        detail.keys.forEach((key,index) => {
                            dts += `
                            /**
                             * ${key.description}
                             */
                            ${key.name}${key.required === "是" ? "" : "?"}: `
                            const types = key.type.split('、');
                            if (types.length > 1) {
                                dts += types.map(t => Types[t.toLowerCase()]).join(' | ')
                            } else {
                                dts += Types[key.type.toLowerCase()]
                            }
                            dts += `;`
                        });

                        dts += `
                        }`;

                    } else if (detail.type === "CALLBACK") {
                       dts += "callback: Function";
                    } else if (detail.type === "KEY") {
						dts += "key: string";
					} else if (detail.type === "DATA") {
						dts += "data: any";
					}
					if (item.detail.length > 1 && i < item.detail.length) {
						dts += ", "
					}
                });

                dts += `): void;
                `;
            })
        });

        dts += `
        }`
        return dts;
    })
    .then(dts => {
        return new Promise((resolve, reject) => {
            fs.writeFile("./wx.d.ts", dts, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            })
        })
    })
    .then(() => {
        console.log('done');
    })
    .catch(err => {
        console.log(err);
    })


