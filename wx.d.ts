// Type definitions for wx app
// Definitions by: hellopao <https://github.com/hellopao/wx.d.ts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/************************************************
*                                               *
*                 微信小程序   API                *
*                                               *
************************************************/


interface IStatus {
    /*
     * 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
     */
    success?: Function;
    /*
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /*
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
}

interface IRequestOption extends IStatus {
    /*
     * 开发者服务器接口地址
     */
    url: string;
    /*
     * 请求的参数
     */
    data?: any | string;
    /*
     * 设置请求的 header , header 中不能设置 Referer
     */
    header?: any;
    /*
     * 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     */
    method?: string;
}

interface IUploadFileOption extends IRequestOption {
    /*
     * HTTP 请求中其他额外的 form data
     */
    formData?: any;
}

interface IDownloadFileOption extends IRequestOption {
    /*
     * HTTP 请求中其他额外的 form data
     */
    formData?: any;
}

interface IconnectSocketOption extends IRequestOption {
}

interface ISendSocketMessageOption {
    /*
     * 需要发送的内容
     */
    data: string;
    /*
     * 接口调用成功的回调函数
     */
    success?: Function;
    /*
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /*
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
}

interface IPreviewImageOption extends IStatus {
    /*
     * 当前显示图片的链接，不填则默认为 urls 的第一张
     */
    current?: string;
    /*
     * 需要预览的图片链接列表
     */
    urls: string[];
}

interface IChooseImageOption extends IStatus {
    /*
     * 最多可以选择的图片张数，默认9
     */
    count?: number;
    /*
     * original 原图，compressed 压缩图，默认二者都有
     */
    sizeType?: undefined;
    /*
     * album 从相册选图，camera 使用相机，默认二者都有
     */
    sourceType?: undefined;

}

interface IStartRecordOption extends IStatus {
}

interface IPlayVoiceOption extends IStatus {
    /*
     * 需要播放的语音文件的文件路径
     */
    filePath: string;
}

interface IGetBackgroundAudioPlayerStateOption extends IStatus {
}

interface IPlayBackgroundAudioOption extends IStatus {
    /*
     * 音乐链接
     */
    dataUrl: string;
    /*
     * 音乐标题
     */
    title?: string;
    /*
     * 封面URL
     */
    coverImgUrl?: string;
}

interface ISeekBackgroundAudioOption extends IStatus {
    /*
     * 音乐位置，单位：秒
     */
    position: number;
}

interface IChooseVideoOption extends IStatus {
    /*
     * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
     */
    sourceType?: undefined;
    /*
     * 拍摄视频最长拍摄时间，单位秒。最长支持60秒
     */
    maxDuration?: number;
    /*
     * 前置或者后置摄像头，默认为前后都有，即：['front', 'back']
     */
    camera?: undefined;
}

interface ISaveFileOption extends IStatus {
    /*
     * 需要保存的文件的临时路径
     */
    tempFilePath: string;
    /*
     * 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
     */
    success?: Function;
}

interface IGetStorageOption extends IStatus {
    /**
     *本地缓存中的指定的 key
     */
    key: string;
    /**
     * 接口调用的回调函数,res = {data: key对应的内容}
     */
    success: Function;
}

interface ISetStorageOption extends IStatus {
    /**
     *本地缓存中的指定的 key
     */
    key: string;
    /**
     * 需要存储的内容
     */
    data: any | string;
}

interface IGetLocationOption extends IStatus {
    /*
     * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
     */
    type?: string;
}

interface IOpenLocationOption extends IStatus {
    /*
     * 纬度，范围为-90~90，负数表示南纬
     */
    latitude: undefined;
    /*
     * 经度，范围为-180~180，负数表示西经
     */
    longitude: undefined;
    /*
     * 缩放比例，范围1~28，默认为28
     */
    scale?: undefined;
    /*
     * 位置名
     */
    name?: string;
    /*
     * 地址的详细说明
     */
    address?: string;
}

interface IGetNetworkTypeOption extends IStatus {
    /*
     * 接口调用成功，返回网络类型 networkType
     */
    success: Function;
}

interface IGetSystemInfoOption extends IStatus {
}

interface ISetNavigationBarTitleOption extends IStatus {
    /*
     * 页面标题
     */
    title?: string;
}

interface INavigateToOption extends IStatus {
    /*
     * 需要跳转的应用内页面的路径
     */
    url: string;
}

interface IRedirectToOption extends IStatus {
    /*
     * 需要跳转的应用内页面的路径
     */
    url: string;
}

interface IAnimation {
    /**
     * 透明度，参数范围 0~1
     */
    opacity: (value: number) => IAnimation;
    /**
     * 颜色值
     */
    backgroundColor: (color: string) => IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    width: (length: number) => IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    height: (length: number) => IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    top: (length: number) => IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    left: (length: number) => IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    bottom: (length: number) => IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    right: (length: number) => IAnimation;
    /**
     * deg的范围-180~180，从原点顺时针旋转一个deg角度
     */
    rotate: (deg: number) => IAnimation;
    /**
     * deg的范围-180~180，在X轴旋转一个deg角度
     */
    rotateX: (deg: number) => IAnimation;
    /**
     * deg的范围-180~180，在Y轴旋转一个deg角度
     */
    rotateY: (deg: number) => IAnimation;
    /**
     * deg的范围-180~180，在Z轴旋转一个deg角度
     */
    rotateZ: (deg: number) => IAnimation;
    /**
     * 同transform-function rotate3d
     */
    rotate3d: (x: number, y: number, z: number, deg: number) => IAnimation;
    /**
     * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
     */
    scale: (sx: number, sy?: number) => IAnimation;
    /**
     * 在X轴缩放sx倍数
     */
    scaleX: (sx: number) => IAnimation;
    /**
     * 在Y轴缩放sy倍数
     */
    scaleY: (sy: number) => IAnimation;
    /**
     * 在Z轴缩放sy倍数
     */
    scaleZ: (sz: number) => IAnimation;
    /**
     * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
     */
    scale3d: (sx: number, sy: number, sz: number) => IAnimation;
    /**
     * 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
     */
    translate: (tx: number, ty?: number) => IAnimation;
    /**
     * 在X轴偏移tx，单位px
     */
    translateX: (tx: number) => IAnimation;
    /**
     * 在Y轴偏移tx，单位px
     */
    translateY: (tx: number) => IAnimation;
    /**
     * 在Z轴偏移tx，单位px
     */
    translateZ: (tx: number) => IAnimation;
    /**
     * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
     */
    translate3d: (tx: number, ty: number, tz: number) => IAnimation;
    /**
     * 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
     */
    skew: (ax: number, ay?: number) => IAnimation;
    /**
     * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
     */
    skewX: (ax: number) => IAnimation;
    /**
     * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
     */
    skewY: (ay: number) => IAnimation;
    /**
     * 同transform-function matrix
     */
    matrix: (a, b, c, d, tx, ty) => IAnimation;
    /**
     * 同transform-function matrix3d
     */
    matrix3d: () => IAnimation;
}

interface ICreateAnimationOption {
    /**
     * 动画持续时间，单位ms，默认值 400
     */
    duration?: number;
    /**
     * 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
     */
    timingFunction?: string;
    /**
     * 动画持续时间，单位 ms，默认值 0
     */
    delay?: number;
    /**
     * 设置transform-origin，默认为"50% 50% 0"
     */
    transformOrigin?: string;
}

interface IContext {
    /**
     * 获取当前context上存储的绘图动作
     */
    getActions: () => IContext;
    /**
     * 清空当前的存储绘图动作
     */
    clearActions: () => IContext;
    /**
     * 对横纵坐标进行缩放
     */
    scale: (scaleWidth: number/**横坐标缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */, scaleHeight: number/**	纵坐标轴缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */) => IContext;
    /**
     * 对坐标轴进行顺时针旋转
     */
    rotate: (deg: number/**degrees * Math.PI/180；degrees范围为0~360;旋转角度，以弧度计 */) => IContext;
    /**
     * 对坐标原点进行缩放
     */
    translate: (x: number/**水平坐标平移量 */, y: number/**竖直坐标平移量 */) => IContext;
    /**
     * 保存当前坐标轴的缩放、旋转、平移信息
     */
    save: () => IContext;
    /**
     * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
     */
    restore: () => IContext;
    /**
     * 在给定的矩形区域内，清除画布上的像素
     */
    clearRect: (x: number, y: number, width: number, height: number) => IContext;
    /**
     * 在画布上绘制被填充的文本
     */
    fillText: (text: string, x: number, y: number) => IContext;
    /**
     * 在画布上绘制图像
     */
    drawImage: (imageResource: string, x: number, y: number, width: number, height: number) => IContext;
    /**
     * 对当前路径进行填充
     */
    fill: () => IContext;
    /**
     * 对当前路径进行描边
     */
    stroke: () => IContext;
    /**
     * 开始一个路径
     */
    beginPath: () => IContext;
    /**
     * 关闭一个路径
     */
    closePath: () => IContext;
    /**
     * 把路径移动到画布中的指定点，但不创建线条。
     */
    moveTo: (x: number, y: number) => IContext;
    /**
     * 添加一个新点，然后在画布中创建从该点到最后指定点的线条。
     */
    lineTo: (x: number, y: number) => IContext;
    /**
     * 添加一个矩形路径到当前路径。
     */
    rect: (x: number, y: number, width: number, height: number) => IContext;
    /**
     * 添加一个弧形路径到当前路径，顺时针绘制。
     */
    arc: (x: number, y: number, radius: number, startAngle: number, sweepAngle: number) => IContext;
    /**
     * 创建二次方贝塞尔曲线
     */
    quadraticCurveTo: (cpx: number, cpy: number, x: number, y: number) => IContext;
    /**
     * 创建三次方贝塞尔曲线
     */
    bezierCurveTo: (cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number) => IContext;
    /**
     * 设置填充样式
     */
    setFillStyle: (color: string) => IContext;
    /**
     * 设置线条样式
     */
    setStrokeStyle: (color: string) => IContext;
    /**
     * 设置阴影
     */
    setShadow: (offsetX: number, offsetY: number, blur: number, color: string) => IContext;
    /**
     * 设置字体大小
     */
    setFontSize: (fontSize: number) => IContext;
    /**
     * 设置线条端点的样式
     */
    setLineCap: (lineCap: 'butt' | 'round' | 'square') => IContext;
    /**
     * 设置两线相交处的样式
     */
    setLineJoin: (lineJoin: 'bevel' | 'round' | 'miter') => IContext;
    /**
     * 设置线条宽度
     */
    setLineWidth: (lineWidth: number) => IContext;
    /**
     * 设置最大倾斜
     */
    setMiterLimit: (miterLimit: number) => IContext;
}

interface IDrawCanvasOption {
    /**
     * 画布标识，传入 <canvas/> 的 cavas-id
     */
    canvasId: string;
    /**
     * 绘图动作数组，由 wx.createContext 创建的 context，调用 getActions 方法导出绘图动作数组。
     */
    actions: Array<any>;
}

interface ILoginOption extends IStatus {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: { code?: string; errMsg?: string }) => void;
}

interface IUserInfo {
    nickName: string;
    gender: number;
    city: string;
    province: string;
    country: string;
    avatarUrl: string;
}

interface IgetUserInfoOption extends IStatus {
    /*
     * 接口调用成功的回调函数
     */
    success?: (res: { userInfo: IUserInfo; rawData: string; signature: string; encryptData: string; }) => void;
}

interface IrequestPaymentOption extends IStatus {
    /*
     * 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
     */
    timeStamp: undefined;
    /*
     * 随机字符串，长度为32个字符以下。
     */
    nonceStr: string;
    /*
     * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
     */
    package: string;
    /*
     * 签名算法，暂支持 MD5
     */
    signType: string;
    /*
     * 签名,具体签名方案参见微信公众号支付帮助文档;
     */
    paySign: string;
}

declare var wx: {


    /*********** 网络 API 列表： ************/

    /**
     * 发起网络请求
     */
    request(opts: IRequestOption): void;

    /**
     * 上传文件
     */
    uploadFile(opts: IUploadFileOption): void;

    /**
     * 下载文件
     */
    downloadFile(opts: IDownloadFileOption): void;

    /**
     * 创建 WebSocket 连接
     */
    connectSocket(opts: IconnectSocketOption): void;

    /**
     * 监听 WebSocket 打开
     */
    onSocketOpen(callback: Function): void;

    /**
     * 监听 WebSocket 错误
     */
    onSocketError(callback: Function): void;

    /**
     * 发送 WebSocket 消息
     */
    sendSocketMessage(opts: ISendSocketMessageOption): void;

    /**
     * 接受 WebSocket 消息
     */
    onSocketMessage(callback: Function): void;

    /**
     * 关闭 WebSocket 连接
     */
    closeSocket(): void;

    /**
     * 监听 WebSocket 关闭
     */
    onSocketClose(callback: Function): void;

    /*********** 媒体 API 列表： ************/

    /**
     * 从相册选择图片，或者拍照
     */
    chooseImage(opts: IChooseImageOption): void;

    /**
     * 预览图片
     */
    previewImage(opts: IPreviewImageOption): void;

    /**
     * 开始录音
     */
    startRecord(opts: IStartRecordOption): void;

    /**
     * 结束录音
     */
    stopRecord(): void;

    /**
     * 播放语音
     */
    playVoice(opts: IPlayVoiceOption): void;

    /**
     * 暂停播放语音
     */
    pauseVoice(): void;

    /**
     * 结束播放语音
     */
    stopVoice(): void;

    /**
     * 获取音乐播放状态
     */
    getBackgroundAudioPlayerState(opts: IGetBackgroundAudioPlayerStateOption): void;

    /**
     * 播放音乐
     */
    playBackgroundAudio(opts: IPlayBackgroundAudioOption): void;

    /**
     * 暂停播放音乐
     */
    pauseBackgroundAudio(): void;

    /**
     * 控制音乐播放进度
     */
    seekBackgroundAudio(opts: ISeekBackgroundAudioOption): void;

    /**
     * 停止播放音乐
     */
    stopBackgroundAudio(): void;

    /**
     * 监听音乐开始播放
     */
    onBackgroundAudioPlay(callback: Function): void;

    /**
     * 监听音乐暂停
     */
    onBackgroundAudioPause(callback: Function): void;

    /**
     * 监听音乐结束
     */
    onBackgroundAudioStop(callback: Function): void;

    /**
     * 从相册选择视频，或者拍摄
     */
    chooseVideo(opts: IChooseVideoOption): void;

    /**
     * 保存文件
     */
    saveFile(opts: ISaveFileOption): void;

    /*********** 数据 API 列表： ************/

    /**
     * 获取本地数据缓存
     */
    getStorage(opts: IGetStorageOption): void;

    /**
     * 获取本地数据缓存
     */
    getStorageSync(key: string /**本地缓存中的指定的 key */): void;

    /**
     * 设置本地数据缓存
     */
    setStorage(opts: ISetStorageOption): void;

    /**
     * 设置本地数据缓存
     */
    setStorageSync(key: string /**本地缓存中的指定的 key */, data: any | string /**需要存储的内容 */): void;

    /**
     * 清理本地数据缓存
     */
    clearStorage(): void;

    /**
     * 清理本地数据缓存
     */
    clearStorageSync(): void;

    /*********** 位置 API 列表： ************/

    /**
     * 获取当前位置
     */
    getLocation(opts: IGetLocationOption): void;

    /**
     * 打开内置地图
     */
    openLocation(opts: IOpenLocationOption): void;

    /*********** 设备 API 列表： ************/

    /**
     * 获取网络类型
     */
    getNetworkType(opts: IGetNetworkTypeOption): void;

    /**
     * 获取系统信息
     */
    getSystemInfo(opts: IGetSystemInfoOption): void;

    /**
     * 监听重力感应数据
     */
    onAccelerometerChange(callback: (res: { x: number; y: number; z: number }) => void): void;

    /**
     * 监听罗盘数据
     */
    onCompassChange(callback: (res: { direction: number }) => void): void;

    /*********** 界面 API 列表： ************/

    /**
     * 设置当前页面标题
     */
    setNavigationBarTitle(opts: ISetNavigationBarTitleOption): void;

    /**
     * 显示导航条加载动画
     */
    showNavigationBarLoading(): void;

    /**
     * 隐藏导航条加载动画
     */
    hideNavigationBarLoading(): void;

    /**
     * 新窗口打开页面
     */
    navigateTo(opts: INavigateToOption): void;

    /**
     * 原窗口打开页面
     */
    redirectTo(opts: IRedirectToOption): void;

    /**
     * 退回上一个页面
     */
    navigateBack(): void;

    /**
     * 动画
     */
    createAnimation(opts: ICreateAnimationOption): IAnimation;

    /**
     * 创建绘图上下文
     */
    createContext(): IContext;

    /**
     * 绘图
     */
    drawCanvas(opts: IDrawCanvasOption): void;

    /**
     * 隐藏键盘
     */
    hideKeyboard(): void;

    /**
     * 停止下拉刷新动画
     */
    stopPullDownRefresh(): void;

    /*********** 开放接口： ************/

    /**
     * 登录
     */
    login(opts: ILoginOption): void;

    /**
     * 获取用户信息
     */
    getUserInfo(opts: IgetUserInfoOption): void;

    /**
     * 发起微信支付
     */
    requestPayment(opts: IrequestPaymentOption): void;

}

interface Application {
    setData: (obj: any) => void;
    getCurrentPage: () => Page;
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
    }): Application;
}

declare var App: AppConstructor;
declare function getApp(): Application;

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
    }): Page;
}

declare var Page: PageConstructor;