const app = getApp()

Page({

  data: {
    imageUrl: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/share-index.jpg',
    background: ''
  }, 

  onLoad: function() {
    if(!app.globalData.background){
      wx.cloud.init();
      wx.cloud.getTempFileURL({
        fileList: ['cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/bg-index.jpg'],
        success: res => {
          app.globalData.background = res.fileList[0].tempFileURL
          this.setData({
            background: app.globalData.background
          })
        },
        fail: console.error
      })
    }else{
      this.setData({
        background: app.globalData.background
      })
    }
    var that = this
    wx.cloud.downloadFile({
      fileID: this.data.imageUrl,
      success: res => {
        // 返回临时文件路径
        that.setData({
          imageUrl: res.tempFilePath
        })
      },
      fail: console.error
    })
  },
  
  // 2021目标
  gotoHello2021: function(){
    wx.navigateTo({
      url: '/pages/Hello2021/Hello2021',
    })
  },

  // 南开同学录
  gotoNKYearBook: function () {
    wx.navigateTo({
      url: '/pages/graduate/graduate',
    })
  },

  //拼图
  gotoPuzzle: function () {
    wx.navigateTo({
      url: '/pages/puzzle/puzzle',
    })
  },
  
  //头像生成器
  gotoAvatarCreator: function() {
    wx.navigateTo({
      url: '/pages/avatarCreator/avatarCreator',
    })
  },

  //南开一百周年签到日历
  gotoNankai100:function() {
    wx.navigateTo({
      url: '/pages/timeMachine/Nankai100/Nankai100',
    })
  },

  //时光机
  gotoTimeMachine: function() {
    wx.navigateTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },

  //纳新
  gotoRecruitment:function(){
    wx.navigateTo({
      url: '/pages/recruitment/recruitment',
    })
  },

  // 南开问卷
  gotoNankaiQs:function() {
    wx.navigateTo({
      url: '/pages/NankaiQs/NankaiQs',
    })
  },

  //用户点击右上角分享
  onShareAppMessage: function(res) {
    return {
      title: "南开大学团委服务平台",
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
  },

  //呼出菜单
  actionSheet: function() {
    wx.showActionSheet({
      itemList: ['关于本程序', '建议与反馈'],
      success(res) {
        if (res.tapIndex === 0) {
          wx.navigateTo({
            url: '/pages/about/about',
          })
        } else if (res.tapIndex === 1) {
          wx.navigateTo({
            url: '/pages/feedback/feedback'
          })
        }
      }
    })
  }
})