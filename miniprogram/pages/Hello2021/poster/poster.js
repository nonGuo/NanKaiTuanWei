// miniprogram/pages/Hello2021/poster/poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareImage:"https://6e61-nankaituanwei-j5pm1-1257843133.tcb.qcloud.la/resources/Hello2021/share.png",
    imagePath:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imagePath: options.imagePath,
    })
  },

  //保存至相册
  save: function () {
    let that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      //保存成功
      success(res) {
        wx.showModal({
          content: '2021年愿望已经保存到你的手机相册啦~',
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

  onShareAppMessage: function () {
    return {
      title: "我的2021愿望清单",
      path: "/pages/Hello2021/Hello2021",
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