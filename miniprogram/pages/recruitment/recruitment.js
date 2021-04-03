// pages/recruitment/recruitment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showtext:false,
    autoplay:true,
    position:0,
    end:false,
    share: "https://image.potatofield.cn/recruitment/recruitment_share.jpg",
  },
  onLoad:function(){
    var that = this
    for(let p=1;p<=250;p++){
      setTimeout(
        function(){
          if(!that.data.end){
            that.setData({
              position:p
            })
          }
        console.log(p)
        },p*100
      )
    }
  },

  finish:function(){
    this.setData({
      showtext:true,
      end:true,
    })
  },

  starttest:function(){
    wx.redirectTo({
      url: './page1/page1',
    })
  },

  exit:function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: "快来了解南开大学团委服务中心的线上宣传部门",
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
  }
})