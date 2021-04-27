// pages/loveNankai__poster/loveNankai__poster.js
Page({

  data: {
    imagePath: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/35045931.jpg',
    shareImage: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/5857730.jpg'
  },

  onLoad: function (options) {
    var that = this;
    that.setData({
      imagePath: options.imagePath,
    })
    wx.cloud.downloadFile({
     // url: that.data.shareImage,
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

  prev: function () {
    wx.redirectTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },

  retry: function () {
    wx.redirectTo({
      url: '../loveNankai',
    })
  },

  onShareAppMessage: function () {
    return {
      title: "快来和南开“弹”恋爱",
      path: '/pages/timeMachine/loveNankai/loveNankai',
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
  },

  //保存至相册
  save: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      //保存成功
      success(res) {
        wx.showModal({
          content: '奖状已经保存到你的手机相册啦~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
        })
      },
      //保存失败
      fail: function () {
        wx.showToast({
          title: "保存失败",
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
})