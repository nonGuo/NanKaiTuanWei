// pages/graduate/graduate.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:"cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/graduate/NKYearBook02.png",
    words:["时间有脚，会跨过漫长，回答关于成长；",
      "时间有耳，会听见声响，回答关于梦想；",
      "时间有嘴，会说出故事，回答关于生活；",
      "毕业的我们，",
      "执着时间的一端，",
      "渴望着答案，",
      "我们现在将要出发，",
      "一起跃入人海，",
      "做翻涌的浪花。",
      "还有些说不完的话，",
      "就让文字代替，",
      "还有些答案说不出口，",
      "就让文字回答。"]
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
      title: "NKer的同学录",
      path: "/pages/graduate/graduate",
      imageUrl: this.data.imageUrl,
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