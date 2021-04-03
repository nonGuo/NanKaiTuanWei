// pages/recruitment/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Q1:false,
  },

  showyes:function(){
    this.setData({
      Q1:true,
    })
    wx.redirectTo({
      url: '../page2/page2?Q1=' + this.data.Q1,
    })
  },

  next:function(){
    wx.redirectTo({
      url: '../page2/page2?Q1=' + this.data.Q1,
    })
  }
  
})