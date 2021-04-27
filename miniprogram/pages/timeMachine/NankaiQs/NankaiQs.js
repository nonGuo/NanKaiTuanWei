// pages/Aaa/Aaa.js
Page({

  data: {
    imageUrl: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/NankaiQs/Sharecard.png',
    nickname: '南开人'
  },

  onLoad: function () {
    var that = this
    wx.cloud.downloadFile({
      fileID: this.data.imageUrl,
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

  getUserProfile:function(){
    let that=this;
    wx.getUserProfile({
      desc:'获取用户昵称',
      success:async function(res){
        wx.showToast({
          title: '授权成功',
          icon:'success',
          mask:true,
          duration:5000
        });

        that.data.nickname=res.userInfo.nickName;
        that.gotoAnswer()
      },
      fail:async function(res){
        wx.showToast({
          title: '授权失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
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
