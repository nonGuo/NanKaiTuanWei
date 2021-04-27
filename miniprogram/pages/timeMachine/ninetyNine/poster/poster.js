Page({

  data: {
    //imagePath: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/ninetyNine/38697647.jpg",
  },

  //接受图片
  onLoad: function (options) {
    this.setData({
      imagePath: options.imagePath
    })
  },

  //保存至相册
  save: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      //保存成功
      success(res) {
        wx.showModal({
          content: '海报已经保存到你的手机相册啦~',
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

  //返回主页
  exit: function () {
    wx.redirectTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },
})