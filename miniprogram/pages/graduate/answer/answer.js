// pages/graduate/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:"",
    name:"南小开",
    birth:"1919.10.17",
    sign:"",
    dept:"",
    judge:"",
    happiness:"",
    who:"",
    thing:"",
    imagePaths:["cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/graduate/NKYearBookPosters03.png","cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/graduate/NKYearBookPosters04.png"],
    imagePath:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      avatar:options.avatar
    })
    var r = Math.floor(Math.random() * this.data.imagePaths.length)
    this.setData({
      imagePath:this.data.imagePaths[r]
    })
    wx.cloud.downloadFile({
      fileID: that.data.imagePath,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath
        })
      }
    })
  },

  bindkeyinput:function(e){
    this.setData({
      [e.currentTarget.id] : e.detail.value
    })
  },

  prev:function(e){
    wx.redirectTo({
      url: '../avatar/avatar',
    })
  },
  
  drawposter:function(e){
    wx.showToast({
      title: '正在绘制',
      icon: 'loading',
      duration: 10000,
      mask: true,
    })
    var that = this;
    var context = wx.createCanvasContext('poster');
    //绘制背景
    var background = this.data.imagePath;
    context.drawImage(background, 0, 0, 1080, 1920);
    //获取头像信息
    wx.getImageInfo({
      src: that.data.avatar,
      success: function (res) {
        that.setData({
          width: res.width,
          height: res.height,
        })
      }
    })
    //绘制头像
    setTimeout(function () {
      var width = that.data.width
      var height = that.data.height
      var xClipFrom = 0;
      var yClipFrom = 0;
      if (width > height) {
        xClipFrom = (width - height) / 2;
        width = height;
      }
      else {
        yClipFrom = (height - width) / 2;
        height = width;
      }
      var avatar = that.data.avatar;
      context.arc(300, 500, 105, 0, 2 * Math.PI)
      context.clip();
      context.drawImage(avatar, xClipFrom, yClipFrom, width, height, 195, 395, 210, 210);
      context.draw();
    }, 2000)
    //绘制基本信息
    var name = that.data.name;
    context.setFontSize(40);
    context.setFillStyle('#AAA');
    context.setTextAlign('left');
    context.fillText(name, 730, 450);
    context.stroke();
    var birth = that.data.birth;
    context.fillText(birth, 730, 530)
    context.stroke();
    var sign = that.data.sign;
    context.fillText(sign, 730, 610)
    context.stroke();
    var dept = that.data.dept;
    context.fillText(dept, 730, 690)
    context.stroke();
    //绘制主观评价
    var chr = that.data.thing.split("");
    var temp = "";
    var row = [];
    for (var i = 0; i < chr.length; i++) {
      if (temp.length < 22) {
        temp += chr[i];
      }
      else {
        i--;
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);
    context.setTextAlign('left');
    for (var i = 0; i < row.length; i++) {
      context.fillText(row[i], 70, 800 + i * 50);
    }
    context.stroke();
    chr = that.data.happiness.split("");
    temp = "";
    row = [];
    for (var i = 0; i < chr.length; i++) {
      if (temp.length < 22) {
        temp += chr[i];
      }
      else {
        i--;
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);
    context.setTextAlign('left');
    for (var i = 0; i < row.length; i++) {
      context.fillText(row[i], 70, 975 + i * 50);
    }
    context.stroke();
    chr = that.data.who.split("");
    temp = "";
    row = [];
    for (var i = 0; i < chr.length; i++) {
      if (temp.length < 22) {
        temp += chr[i];
      }
      else {
        i--;
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);
    context.setTextAlign('left');
    for (var i = 0; i < row.length; i++) {
      context.fillText(row[i], 70, 1150 + i * 50);
    }
    context.stroke();
    chr = that.data.judge.split("");
    temp = "";
    row = [];
    for (var i = 0; i < chr.length; i++) {
      if (temp.length < 22) {
        temp += chr[i];
      }
      else {
        i--;
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);
    context.setTextAlign('left');
    for (var i = 0; i < row.length; i++) {
      context.fillText(row[i], 70, 1325 + i * 50);
    }
    context.stroke();
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'poster',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath,
          });
          wx.redirectTo({
            url: '../poster/poster?imagePath=' + that.data.imagePath,
          })
        },
        fail: function (res) {
          wx.showToast({
            title: '图片生成失败',
            icon: 'none',
            duration: 1500
          })
        }
      });
    }, 3000);
  }
})