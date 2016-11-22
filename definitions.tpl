// Type definitions for wx app
// Definitions by: hellopao <https://github.com/hellopao/wx.d.ts>

/************************************************
*                                               *
*                 微信小程序  API                *
*                                               *
************************************************/

interface IAnimation {
    /**
     * 透明度，参数范围 0~1
     */
    opacity(value: number): IAnimation;
    /**
     * 颜色值
     */
    backgroundColor(color: string): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    width(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    height(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    top(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    left(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    bottom(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    right(length: number): IAnimation;
    /**
     * deg的范围-180~180，从原点顺时针旋转一个deg角度
     */
    rotate(deg: number): IAnimation;
    /**
     * deg的范围-180~180，在X轴旋转一个deg角度
     */
    rotateX(deg: number): IAnimation;
    /**
     * deg的范围-180~180，在Y轴旋转一个deg角度
     */
    rotateY(deg: number): IAnimation;
    /**
     * deg的范围-180~180，在Z轴旋转一个deg角度
     */
    rotateZ(deg: number): IAnimation;
    /**
     * 同transform-function rotate3d
     */
    rotate3d(x: number, y: number, z: number, deg: number): IAnimation;
    /**
     * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
     */
    scale(sx: number, sy?: number): IAnimation;
    /**
     * 在X轴缩放sx倍数
     */
    scaleX(sx: number): IAnimation;
    /**
     * 在Y轴缩放sy倍数
     */
    scaleY(sy: number): IAnimation;
    /**
     * 在Z轴缩放sy倍数
     */
    scaleZ(sz: number): IAnimation;
    /**
     * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
     */
    scale3d(sx: number, sy: number, sz: number): IAnimation;
    /**
     * 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
     */
    translate(tx: number, ty?: number): IAnimation;
    /**
     * 在X轴偏移tx，单位px
     */
    translateX(tx: number): IAnimation;
    /**
     * 在Y轴偏移tx，单位px
     */
    translateY(tx: number): IAnimation;
    /**
     * 在Z轴偏移tx，单位px
     */
    translateZ(tx: number): IAnimation;
    /**
     * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
     */
    translate3d(tx: number, ty: number, tz: number): IAnimation;
    /**
     * 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
     */
    skew(ax: number, ay?: number): IAnimation;
    /**
     * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
     */
    skewX(ax: number): IAnimation;
    /**
     * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
     */
    skewY(ay: number): IAnimation;
    /**
     * 同transform-function matrix
     */
    matrix(a, b, c, d, tx, ty): IAnimation;
    /**
     * 同transform-function matrix3d
     */
    matrix3d(): IAnimation;
}

interface IContext {
    /**
     * 获取当前context上存储的绘图动作
     */
    getActions(): Array<any>;
    /**
     * 清空当前的存储绘图动作
     */
    clearActions(): void;
    /**
     * 对横纵坐标进行缩放
     */
    scale(scaleWidth: number/**横坐标缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */, scaleHeight: number/**	纵坐标轴缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */): void;
    /**
     * 对坐标轴进行顺时针旋转
     */
    rotate(deg: number/**degrees * Math.PI/180；degrees范围为0~360;旋转角度，以弧度计 */): void;
    /**
     * 对坐标原点进行缩放
     */
    translate(x: number/**水平坐标平移量 */, y: number/**竖直坐标平移量 */): void;
    /**
     * 保存当前坐标轴的缩放、旋转、平移信息
     */
    save(): void;
    /**
     * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
     */
    restore(): void;
    /**
     * 在给定的矩形区域内，清除画布上的像素
     */
    clearRect(x: number, y: number, width: number, height: number): void;
    /**
     * 在画布上绘制被填充的文本
     */
    fillText(text: string, x: number, y: number): void;
    /**
     * 在画布上绘制图像
     */
    drawImage(imageResource: string, x: number, y: number, width: number, height: number): void;
    /**
     * 对当前路径进行填充
     */
    fill(): void;
    /**
     * 对当前路径进行描边
     */
    stroke(): void;
    /**
     * 开始一个路径
     */
    beginPath(): void;
    /**
     * 关闭一个路径
     */
    closePath(): void;
    /**
     * 把路径移动到画布中的指定点，但不创建线条。
     */
    moveTo(x: number, y: number): void;
    /**
     * 添加一个新点，然后在画布中创建从该点到最后指定点的线条。
     */
    lineTo(x: number, y: number): void;
    /**
     * 添加一个矩形路径到当前路径。
     */
    rect(x: number, y: number, width: number, height: number): void;
    /**
     * 添加一个弧形路径到当前路径，顺时针绘制。
     */
    arc(x: number, y: number, radius: number, startAngle: number, sweepAngle: number): void;
    /**
     * 创建二次方贝塞尔曲线
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * 创建三次方贝塞尔曲线
     */
    bezierCurveTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): void;
    /**
     * 设置填充样式
     */
    setFillStyle(color: string): void;
    /**
     * 设置线条样式
     */
    setStrokeStyle(color: string): void;
    /**
     * 设置阴影
     */
    setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;
    /**
     * 设置字体大小
     */
    setFontSize(fontSize: number): void;
    /**
     * 设置线条端点的样式
     */
    setLineCap(lineCap: 'butt' | 'round' | 'square'): void;
    /**
     * 设置两线相交处的样式
     */
    setLineJoin(lineJoin: 'bevel' | 'round' | 'miter'): void;
    /**
     * 设置线条宽度
     */
    setLineWidth(lineWidth: number): void;
    /**
     * 设置最大倾斜
     */
    setMiterLimit(miterLimit: number): void;
}

interface IAudioContext {
    /**
     * 播放 
     */
    play: () => void;	
    /**
     * 暂停 
     */
    pause: () => void;	
    /**
     * 跳转到指定位置，单位 s
     */
    seek: (position: number) => void;	
}

interface IVideoContext {
    /**
     * 播放 
     */
    play: () => void;	
    /**
     * 暂停 
     */
    pause: () => void;	
    /**
     * 跳转到指定位置，单位 s
     */
    seek: (position: number) => void;
    /**
     * 发送弹幕，danmu 包含两个属性 text, color。
     */
    sendDanmu: (danmu: {text: string; color: string;}) => void;
}

interface Application {
    setData: (obj: any) => void;
}

interface AppConstructor {
    new (): Application;
    (opts: {
        /**
         * 生命周期函数--监听小程序初始化
         */
        onLaunch?: () => void;
        /**
         * 生命周期函数--监听小程序显示
         */
        onShow?: () => void;
        /**
         * 生命周期函数--监听小程序隐藏
         */
        onHide?: () => void;

        [key: string]: any;
    }): Application;
}

declare var App: AppConstructor;
declare function getApp(): Application;

declare function getCurrentPages(): Page[];

interface Page {
    setData: (obj: any) => void;
}

interface PageConstructor {
    new (): Page;
    (opts: {
        /**
         * 页面的初始数据
         */
        data?: any;
        /**
         * 页面的初始数据
         */
        onLoad?: () => void;
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady?: () => void;
        /**
         * 生命周期函数--监听页面显示
         */
        onShow?: () => void;
        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide?: () => void;
        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload?: () => void;
        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefreash?: () => void;
        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom?: () => void;

        [key: string]: any;
    }): Page;
}

declare var Page: PageConstructor;

