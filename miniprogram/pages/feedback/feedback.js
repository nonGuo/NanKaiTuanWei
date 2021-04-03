// pages/feedback/feedback.js
const app = getApp()
Page({

  onLoad: function() {
    this.setData({
      background: app.globalData.background
    })
  },

  //返回首页
  return: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
})