Page({

  data: {
    wish: "允公允能，日新月异",
    avatar: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/ninetyNine/43988906.jpg",
    nickname: "南开人",
    share: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/ninetyNine/70437359.jpg",
  },

  //下载默认头像及分享图片至临时目录
  onLoad: function () {
    var that = this;
    wx.cloud.downloadFile({
      //url: that.data.avatar,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/ninetyNine/43988906.jpg',
      success: res =>{
        var tempFilePath = res.tempFilePath;
        that.setData({
          avatar: tempFilePath
        })
      }
    })
    wx.cloud.downloadFile({
      //url: that.data.share,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/ninetyNine/70437359.jpg',
    success:res => {
        var tempFilePath = res.tempFilePath;
        that.setData({
          share: tempFilePath
        })
      }
    })
  },

  //返回
  prev: function() {
    wx.redirectTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },
  
  //进入下一步并传值
  next: function() {
    var that = this
    wx.redirectTo({
      url: 'avatar/avatar?wish=' + that.data.wish + '&avatar=' + that.data.avatar+ '&nickname='+that.data.nickname,
    })
  },

//获取当前页面输入框内容
  bindKeyInput: function(e) {
    this.data.wish = e.detail.value;
  },

  //分享
  onShareAppMessage: function (res) {
    return {
      title: "生成你的九九南开专属海报",
      imageUrl: this.data.share,
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
})