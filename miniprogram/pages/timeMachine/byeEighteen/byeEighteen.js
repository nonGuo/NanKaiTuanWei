Page({

  data: {
    nickname: "南开人",
    shareImage: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/byeEighteen/61841224.jpg",
  },

  //下载分享图
  onLoad: function (options) {
    var that = this
    wx.downloadFile({
      url: that.data.shareImage,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          shareImage: tempFilePath
        })
      }
    })
  },

  //获取昵称框里的值
  bindKeyInput: function (e) {
    this.setData({
      nickname: e.detail.value,
    })
  },

  //按下确认按钮
  bindConfirm: function () {
    wx.redirectTo({
      url: './avatar/avatar?nickname=' + this.data.nickname,
    })
  },

  //授权获得昵称
  getUserProfile: async function(e){
    var that = this;
    wx.getUserProfile({
      desc: '获取微信昵称',
      success: async res =>{
      that.setData({
        nickname: res.userInfo.nickName
      })
      wx.redirectTo({
        url: './avatar/avatar?nickname=' + this.data.nickname,
      })
    },
    fail:async function() {
      wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1500
      })
    }
  })
  },

  //退出
  return: function () {
    wx.redirectTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },

  //分享
  onShareAppMessage: function () {
    return {
      title: "回首2018，快来测试你的南开气质吧~",
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