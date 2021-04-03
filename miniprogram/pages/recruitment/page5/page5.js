// pages/recruitment/page5/page5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Q5: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Q1: options.Q1,
      Q2: options.Q2,
      Q3: options.Q3,
      Q4:options.Q4
    })
  },

  showyes: function () {
    this.setData({
      Q5: true,
    })
    wx.redirectTo({
      url: '../page6/page6?Q1=' + this.data.Q1 + '&Q2=' + this.data.Q2 + '&Q3=' + this.data.Q3 + '&Q4=' + this.data.Q4 + '&Q5=' + this.data.Q5,
    })
  },

  next: function () {
    wx.redirectTo({
      url: '../page6/page6?Q1=' + this.data.Q1 + '&Q2=' + this.data.Q2 + '&Q3=' + this.data.Q3 + '&Q4=' + this.data.Q4 + '&Q5=' + this.data.Q5,
    })
  }
})