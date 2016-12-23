/// <reference path="./wx.d.ts" />

App({
    onLaunch: function() {
    }
})

var app = getApp();
app.setData({
    a: "1"
})
Page({
    onHide: function() {
    }
})

wx.getSystemInfo({
    success: function() {

    }
})

getCurrentPages().forEach(page => {})

const video = wx.createVideoContext();
video.play();
video.seek(10);
video.sendDanmu({text: "ss",color: "red"})

const audio = wx.createAudioContext();
audio.pause();
audio.seek(11)

const animation = wx.createAnimation({});

animation.scaleX(1);

const context = wx.createCanvasContext();

context.beginPath();
context.lineTo(1,1);
context.moveTo(100,100);
context.fill();

wx.getBackgroundAudioPlayerState({
    success: res => {
        console.log(res.currentPosition);
    }
});

