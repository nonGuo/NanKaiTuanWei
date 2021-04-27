//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageUrl: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/puzzle/background01.jpg'
  },

  start:function(e){
    wx.navigateTo({
      url: './pages/choose/choose',
    })
  },
  onShareAppMessage:function(e){
    return{
      title: "一起拼图吧！",
      imageUrl:this.data.imageUrl,
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
