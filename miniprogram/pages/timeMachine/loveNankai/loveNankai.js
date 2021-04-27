// pages/loveNankai/loveNankai.js
Page({

  data: {
    shareImage: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/5857730.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.cloud.downloadFile({
      //url: that.data.shareImage,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/5857730.jpg',
      success:res=> {
        var tempFilePath = res.tempFilePath
        that.setData({
          shareImage: tempFilePath
        })
      },
      fail: console.error
    })
  },

  prev: function() {
    wx.redirectTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },

  hard: function () {
    wx.redirectTo({
      url: 'play/play?chances=3&speed=150&level=hard',
    })
  },

  normal: function () {
    wx.redirectTo({
      url: 'play/play?chances=3&speed=250&level=normal',
    })
  },

  easy: function () {
    wx.redirectTo({
      url: 'play/play?chances=3&speed=500&level=easy',
    })
  },

  onShareAppMessage: function () {
    return {
      title: "快来和南开“弹”恋爱",
      imageUrl: this.data.shareImage,
      success: function (res) {
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 1500
        })
      },
      fail: function (res) {
        wx.showToast({
          title: "分享失败",
          icon: 'none',
          duration: 1500
        })
      }
    }
  }
})