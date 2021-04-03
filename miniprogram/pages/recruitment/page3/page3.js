// pages/recruitment/page3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Q3: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Q1: options.Q1,
      Q2:options.Q2
    })
  },

  showyes: function () {
    this.setData({
      Q3: true,
    })
    wx.redirectTo({
      url: '../page4/page4?Q1=' + this.data.Q1 + '&Q2=' + this.data.Q2 + '&Q3=' +this.data.Q3,
    })
  },

  next: function () {
    wx.redirectTo({
      url: '../page4/page4?Q1=' + this.data.Q1 + '&Q2=' + this.data.Q2 + '&Q3=' + this.data.Q3,
    })
  }
})