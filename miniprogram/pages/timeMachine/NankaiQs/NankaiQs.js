// pages/Aaa/Aaa.js
Page({

  data: {
    imageUrl: 'https://image.potatofield.cn/NankaiQs/Sharecard.png',
    nickname: '南开人'
  },

  onLoad: function () {
    var that = this
    wx.downloadFile({
      url: this.data.imageUrl,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imageUrl: tempFilePath
        })
      }
    })
  },

  gotoAnswer: function () {
    wx.redirectTo({
      url: './answer/answer?nickname=' + this.data.nickname,
    })
  },

  prev: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  //获取昵称框里的值
  bindKeyInput: function (e) {
    this.setData({
      nickname: e.detail.value,
    })
  },

  bindConfirm: function () {
    this.gotoAnswer()
  },

  //授权获得昵称
  bindGetNickname: function (e) {
    var that = this;
    if (e.detail.userInfo) {
      that.setData({
        nickname: e.detail.userInfo.nickName,
      })
      that.gotoAnswer()
    }
    else {
      wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1500
      })
    }
  },

  onShareAppMessage: function () {
    return {
      title: "校庆志愿者终极闯关",
      path: "/pages/timeMachine/NankaiQs/NankaiQs",
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
