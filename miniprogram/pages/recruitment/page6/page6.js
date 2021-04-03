// pages/recruitment/page6/page6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Q6: false,
    result:false,
    //  Q7:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Q1: options.Q1,
      Q2: options.Q2,
      Q3: options.Q3,
      Q4: options.Q4,
      Q5:options.Q5
    })
  },

  showyes: function () {
    this.setData({
      Q6: true,
      result:true
    })
  },

  next:function(){
    this.setData({
      result:true
    })
  },


  showResult:function(){
    // if (this.data.Q1 || this.data.Q2 || this.data.Q3 || this.data.Q4 || this.data.Q5 || this.data.Q6)
    //  Q7=true;
    wx.redirectTo({
      url: '../result/result?Q1=' + this.data.Q1 + '&Q2=' + this.data.Q2 + '&Q3=' + this.data.Q3 + '&Q4=' + this.data.Q4 + '&Q5=' + this.data.Q5 + '&Q6=' + this.data.Q6 /*+ '&Q7=' + this.data.Q7*/,
    })
  }
})