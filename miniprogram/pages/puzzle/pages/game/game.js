// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: 'https://image.potatofield.cn/picturepuzzle/',
    width:0,
    height:0,
    blocks:[
      {
        pos:1,
        list:1,
        hide:false,
        blockSrc:"",
        x:0,
        y:0
      },
      {
        pos: 2,
        list: 2,
        hide: false,
        blockSrc: "",
        x:-1,
        y:0
      },
      {
        pos: 3,
        list: 3,
        hide: false,
        blockSrc: "",
        x:-2,
        y:0
      },
      {
        pos: 4,
        list: 4,
        hide: false,
        blockSrc: "",
        x:0,
        y:-1
      },
      {
        pos: 5,
        list: 5,
        hide: false,
        blockSrc: "",
        x:-1,
        y:-1
      },
      {
        pos: 6,
        list: 6,
        hide: false,
        blockSrc: "",
        x:-2,
        y:-1
      }, 
      {
        pos: 7,
        list: 7,
        hide: false,
        blockSrc: "",
        x:0,
        y:-2
      }, 
      {
        pos: 8,
        list: 8,
        hide: false,
        blockSrc: "",
        x:-1,
        y:-2
      },
      {
        pos: 9,
        list: 9,
        hide: true,
        blockSrc: "",
        x:-2,
        y:-2
      }
    ],
    blank:9,
    count:0
  },

  sortArr: function (that) {
    for(var i=0;i<20;i++){
      var j = Math.floor(Math.random() * 8)
      var k = Math.floor(Math.random() * 8)
      var tmp1 = that.data.blocks[j].pos
      var tmp2 = that.data.blocks[j].blockSrc
      var tmp3 = that.data.blocks[k].pos
      var tmp4 = that.data.blocks[k].blockSrc
      console.log(tmp1)
      console.log(tmp2)
      console.log(tmp3)
      console.log(tmp4)
      var str1 = 'blocks[' + j + '].pos'
      var str2 = 'blocks[' + k + '].pos'
      var str3 = 'blocks[' + j + '].blockSrc'
      var str4 = 'blocks[' + k + '].blockSrc'
      that.setData({
        [str1]: tmp3,
        [str2]: tmp1,
        [str3]: tmp4,
        [str4]: tmp2
      })
    }
  },

  // handle: function (i, that) {
  //   let context = wx.createCanvasContext('cut', that)
  //   var index = 'blocks[' + i + '].blockSrc'
  //   var destwidth = that.data.width / 3
  //   var destheight = that.data.height / 3
  //   var xpos = that.data.width / 3 * that.data.blocks[i].x
  //   var ypos = that.data.height / 3 * that.data.blocks[i].y
  //   context.drawImage(that.data.pic, xpos, ypos, destwidth, destheight)
  //   context.draw(false, setTimeout(function () {
  //     wx.canvasToTempFilePath({
  //       destWidth: destwidth,
  //       destHeight: destheight,
  //       canvasId: 'cut',
  //       success(res) {
  //         that.setData({
  //           [index]: res.tempFilePath
  //         })
  //         if (i < 8) {
  //           that.handle(i + 1, that)
  //         } else {
  //           that.setData({
  //             blocks: that.data.blocks
  //           })
  //         }
  //       },
  //     }, that)
  //   }, 1000))
  // },
  check:function(i,that){
    // wx.navigateTo({
    //   url: '../success/success?count=' + that.data.count,
    // })
    if(i==9){
      wx.navigateTo({
        url: '../success/success?count='+that.data.count,
      })
    }
    if(that.data.blocks[i].list==that.data.blocks[i].pos){
      that.check(i+1,that)
    }else{
      return
    }
  },
//pos 显示的图块编号 list 方格编号
  move: function (e) {
    var now=this.data.count+1
    var vac=this.data.blank
    var cur = e.target.dataset.list
    if ((cur + 1 ==vac &&vac%3!=1)||(cur-1==vac&&vac%3!=0)||(cur+3==vac)||(cur-3==vac)){
      var tmp1 = this.data.blocks[cur-1].pos
      var tmp2 = this.data.blocks[cur-1].blockSrc
      var tmp3 = this.data.blocks[vac - 1].pos
      var tmp4 = this.data.blocks[vac - 1].blockSrc
      var str1 = 'blocks[' + (cur - 1) + '].pos'
      var str2 = 'blocks[' + (vac - 1) + '].pos'
      var str3 = 'blocks[' + (cur - 1)+ '].blockSrc'
      var str4 = 'blocks[' + (vac - 1) + '].blockSrc'
      var str5 = 'blocks[' + (cur - 1) + '].hide'
      var str6 = 'blocks[' + (vac - 1) + '].hide'
      this.setData({
        [str1]: tmp3,
        [str2]: tmp1,
        [str3]: tmp4,
        [str4]: tmp2,
        blank:cur,
        [str5]:true,
        [str6]:false,
        count:now
      })
      this.check(0, this)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pic: 'https://image.potatofield.cn/picturepuzzle/' + options.id,
      id:options.id
    });
    wx.showToast({
      title: 'Loading……',
      icon: 'loading',
      mask: true,
      duration: 1000
    })
    var that=this
    for(let i=0;i<9;i++){
      var str="blocks["+i+"].blockSrc"
      that.setData({
        [str]: "https://image.potatofield.cn/picturepuzzle/" + that.data.id +"/GridImage-"+(i+1)+".png"
      })
    }
    setTimeout(function () {
      that.sortArr(that)
    },1000)
    // console.log(that)
    // console.log(this)
    // wx.downloadFile({
    //   url: that.data.pic,
    //   success: function (res) {
    //     var tempFilePath = res.tempFilePath;
    //     that.setData({
    //       pic: tempFilePath
    //     })
    //     wx.getImageInfo({
    //       src: that.data.pic,
    //       success: function (res) {
    //         that.setData({
    //           width: res.width,
    //           height: res.height
    //         })
    //       }
    //     })
    //     that.handle(0, that)
    //     setTimeout(function(){
    //       that.sortArr(that)
    //     },9000)
    //   }
    // })
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