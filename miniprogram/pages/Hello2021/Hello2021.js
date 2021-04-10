// pages/Hello2021/Hello2021.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareImage:"https://image.potatofield.cn/Hello2021/share.png",
    words:[
      "这难熬却又飞快流逝的2020",
      "已经进入了尾声",
      "对即将到来的2021",
      "我们仍然满怀着期待",
      "2021，这一次",
      "请一定要实现我的愿望呀！"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  prev:function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },

  next:function(){
    wx.redirectTo({
      url: './avatar/avatar',
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