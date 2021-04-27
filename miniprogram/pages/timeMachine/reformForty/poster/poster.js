Page({

  data: {
   // imagePath: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/reformForty/43294796.jpg',
    shareImage: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/reformForty/94799488.jpg'
  },

  onLoad: function (options) {
    var that = this;
    that.setData({
      nickname: options.nickname,
      imagePath: options.imagePath
    })
    wx.cloud.downloadFile({
     fileID:this.data.shareImage,
      success:res=> {
        var tempFilePath = res.tempFilePath
        that.setData({
          shareImage:tempFilePath
        })
      },
      fail:console.error
    })
  },

  return: function () {
    wx.redirectTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },

  retry: function () {
    wx.redirectTo({
      url: '../answer/answer?nickname=' + this.data.nickname,
    })
  },

  onShareAppMessage: function () {
    return {
      title: '改革开放知多少',
      path: '/pages/timeMachine/reformForty/reformForty',
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