const app = getApp();

Page({

  data: {
    month: "",
    day: "",
    remain: "",
    wish: "",
    finish: false,
    nkLogo: 'https://image.potatofield.cn/Nankai100/NK-100.png',
  },


  onLoad: function (options) {
    let that = this;
    let date = new Date(Date.parse(new Date()))
    let MONTH = date.getMonth() + 1
    let DAY = date.getDate()
    that.setData({
      month: MONTH,
      day: DAY,
      year: date.getFullYear(),
    })
    //计算日期差
    {
      let NOW = date
      let END = new Date("Oct 17, 2019")
      let REMAIN = Math.ceil((END - NOW) / (1000 * 60 * 60 * 24))
      if (REMAIN < 0) {
        that.setData({
          finish: true
        })
      } else {
        that.setData({
          remain: REMAIN
        })
      }
    }
  },


  //获取当前页面输入框内容
  bindKeyInput: function (e) {
    this.data.wish = e.detail.value;
  },

  //前往打卡
  next: function () {
    let that = this;
    wx.redirectTo({
      url: './calender/calender?wish=' + that.data.wish + '&month=' + that.data.month + '&year=' + that.data.year + '&day=' + that.data.day + '&finish=' + that.data.finish
    })
  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})