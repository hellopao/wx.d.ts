/// <reference path="./wx.d.ts" />

App({
    onLaunch: function() {
    }
})

var app = getApp();

app.getCurrentPage();
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

const animation = wx.createAnimation({});

animation.scaleX(1);

const context = wx.createContext();

context.beginPath();
context.lineTo(1,1);
context.moveTo(100,100);
context.fill();

wx.getBackgroundAudioPlayerState({
    success: res => {
        console.log(res.currentPosition);
    }
})