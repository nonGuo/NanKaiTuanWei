Page({

  data: {
    imagePath: '',
    shareImage: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/NankaiQs/Sharecard.png'
  },

  onLoad: function (options) {
    var that = this;
    that.setData({
      nickname: options.nickname,
      imagePath: options.imagePath
    })
    wx.cloud.downloadFile({
      fileID: that.data.shareImage,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          shareImage: tempFilePath
        })
      }
    })
  },

  prev: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  retry: function () {
    wx.redirectTo({
      url: '../answer/answer?nickname=' + this.data.nickname,
    })
  },

  onShareAppMessage: function () {
    return {
      title: '校庆志愿者终极闯关',
      path: "/pages/timeMachine/NankaiQs/NankaiQs",
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
          content: '成绩单已经保存到你的手机相册啦~',
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