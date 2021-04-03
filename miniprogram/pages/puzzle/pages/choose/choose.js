// pages/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:[
      {
        id:'01.png',
        address:'https://image.potatofield.cn/picturepuzzle/01.png',
      },
      {
        id: '02.png',
        address: 'https://image.potatofield.cn/picturepuzzle/02.png',
      },
      {
        id: '03.png',
        address: 'https://image.potatofield.cn/picturepuzzle/03.png',
      },
      {
        id: '04.png',
        address: 'https://image.potatofield.cn/picturepuzzle/04.png',
      },
      {
        id: '05.jpg',
        address: 'https://image.potatofield.cn/picturepuzzle/05.jpg',
      },
      {
        id: '06.png',
        address: 'https://image.potatofield.cn/picturepuzzle/06.png',
      }
    ]
  },
  choose:function(options){
    console.log(options);
    wx.navigateTo({
      url: '../game/game?id='+options.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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