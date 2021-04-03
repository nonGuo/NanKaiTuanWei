// pages/timeMachine/timeMachine.js
const app = getApp();
Page({
  onLoad: function(){
    this.setData({
      background: app.globalData.background
    })
  },

  //武汉加油
  gotoSupportWuhan: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/supportWuhan/supportWuhan',
    })
  },
  
  // 校庆志愿者终极闯关
  gotoNankaiQs: function() {
    wx.navigateTo({
      url: '/pages/timeMachine/NankaiQs/NankaiQs',
    })
  },

  // 校庆签到
  gotoNankai100: function() {
    wx.navigateTo({
      url: '/pages/timeMachine/Nankai100/Nankai100',
    })
  },

  //劳动节
  gotoLaborDay2019: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/laborDay2019/laborDay2019',
    })
  },

  //清明节
  gotoQingming: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/qingming/qingming',
    })
  },

  //许愿2019
  gotoFlagNineteen: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/wishNineteen/wishNineteen',
    })
  },

  //回首2018
  gotoByeEighteen: function () {
    wx.navigateTo({
      url: './byeEighteen/byeEighteen',
    })
  },

  //改革开放知多少
  gotoReformForty: function () {
    wx.navigateTo({
      url: './reformForty/reformForty',
    })
  },

  //我与南开谈恋爱
  gotoLoveNankai: function () {
    wx.navigateTo({
      url: './loveNankai/loveNankai',
    })
  },

  //九九南开
  gotoNinetyNine: function () {
    wx.navigateTo({
      url: './ninetyNine/ninetyNine',
    })
  },

  ///荷花节
  gotoLotus: function () {
    wx.navigateTo({
      url: './lotus/lotus',
    })
  },

  // 抽奖抽签小助手
  gotoLottery:function() {
    wx.navigateTo({
      url: './lottery/lottery',
    })
  },

  //青年节
  gotoYouthDay: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/youthDay/youthDay',
    })
  },

  prev: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
})