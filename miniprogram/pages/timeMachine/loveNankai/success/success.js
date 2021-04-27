// pages/loveNankai/success/success.js
Page({

  data: {
    imagePath: 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/35045931.jpg',
    nickname: '南开人',
    level: 'normal'
  },

  onLoad: function (options) {
    var that = this;
    that.setData({
      level: options.level,
    })
    wx.cloud.downloadFile({
      //url: that.data.imagePath,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/35045931.jpg',
      success:res=> {
        var tempFilePath = res.tempFilePath
        that.setData({
          imagePath: tempFilePath
        })
      },
      fail: console.error
    })
  },

  createPoster: function () {
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
    context.drawImage(background, 0, 0, 1620, 1080);
    //绘制昵称
    var name = that.data.nickname;
    context.setFontSize(90);
    context.setFillStyle('#ffffff');
    context.setTextAlign('left');
    context.fillText(name, 430, 170);
    context.stroke();
    //绘制等级
    var level = that.data.level;
    if (level == 'easy') {
      level = '简单'
    } else if (level == 'normal') {
      level = '正常'
    } else {
      level = '困难'
    }
    context.setFontSize(55);
    context.setFillStyle('#ffffff');
    context.setTextAlign('center');
    context.fillText(level, 315, 400);
    context.stroke();
    context.draw();
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
  },

  bindKeyInput: function (e) {
    this.setData({
      nickname: e.detail.value,
    })
  },

  bindConfirm: function () {
    this.createPoster()
  },
})