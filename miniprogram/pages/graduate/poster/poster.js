// pages/graduate/poster/poster.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imagePath: options.imagePath,
      background: options.background
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
          content: '同学录已经保存到你的手机相册啦~',
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
      url: '/pages/index/index',
    })
  },
})