// pages/recruitment/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Q2:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Q1:options.Q1,
    })
  },

  showyes: function () {
    this.setData({
      Q2: true,
    })
    wx.redirectTo({
      url: '../page3/page3?Q1=' + this.data.Q1 + '&Q2=' + this.data.Q2,
    })
  },

  next: function () {
    wx.redirectTo({
      url: '../page3/page3?Q1=' + this.data.Q1 + '&Q2=' + this.data.Q2,
    })
  }
})