Page({

  //页面的初始数据
  data: {
    wish: "修得莲心不染尘",
    showLotusHolder: false,
    avatar: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/lotus/43988906.jpg",
    name: "一位神秘的南开人",
    background: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/lotus/44879622.jpg",
    shareImage: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/lotus/76412157.jpg",
  },

  onLoad: function() {
    var that = this;
    wx.cloud.downloadFile({
     fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/lotus/43988906.jpg',
      success:res=> {
        var tempFilePath = res.tempFilePath;
        that.setData({
          avatar: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
     fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/lotus/44879622.jpg',
      success: res=>{
        var tempFilePath = res.tempFilePath;
        that.setData({
          background: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/lotus/76412157.jpg',
      success:res=> {
        var tempFilePath = res.tempFilePath;
        that.setData({
          shareImage: tempFilePath
        })
      },
      fail: console.error
    })
  },

  //获取输入框的值
  bindKeyInput: function(e) {
    this.setData({
      wish: e.detail.value
    })
  },

  //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
  createNewImg: function() {
    var that = this;
    var context = wx.createCanvasContext('lotus');
    //绘制背景
    var background = that.data.background;
    context.drawImage(background, 0, 0, 1080, 1920);
    //绘制用户名
    var name = that.data.name;
    context.setFontSize(58);
    context.setFillStyle('#333333');
    context.setTextAlign('center');
    context.fillText(name, 576, 520);
    context.stroke();
    //绘制荷花寄语
    var message = "“" + that.data.wish + "”";
    context.setFontSize(58);
    context.setFillStyle('#333333');
    context.setTextAlign('center');
    context.fillText(message, 708, 864);
    context.stroke();
    //绘制头像
    var avatar = that.data.avatar;
    context.arc(540, 247, 101, 0, 2 * Math.PI)
    context.clip();
    context.drawImage(avatar, 438, 147, 202, 202);
    context.draw();
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function() {
      wx.canvasToTempFilePath({
        canvasId: 'lotus',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath,
            canvasHidden: true
          });
        },
        fail: function(res) {
          wx.showToast({
            title: '图片生成失败',
            icon: 'none',
            duration: 2000
          })
        }
      });
    }, 2000);
  },

  //点击保存到相册
  save: function() {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              that.setData({
                showLotusHolder: false
              })
            }
          }
        })
      },
      fail: function() {
        that.setData({
          showLotusHolder: false
        })
        wx.showToast({
          title: "保存失败",
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  //取消保存图片
  cancel: function() {
    var that = this;
    that.setData({
      showLotusHolder: false
    })
    wx.showToast({
      title: "取消保存",
      icon: 'none',
      duration: 2000
    })
  },

  //返回
  prev: function() {
    wx.redirectTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },

  //用户点击右上角分享
  onShareAppMessage: function(res) {
    return {
      title: "南开大学荷花节",
      imageUrl: this.data.shareImage,
      success: function (res) {
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        wx.showToast({
          title: "分享失败",
          icon: 'none',
          duration: 2000
        })
      }
    }
  },

  //获取授权并绘制
  getUserProfile: async function(e) { 
    var that = this
    wx.getUserProfile({
      desc: '获取授权',
      success: async function (res) {
        wx.showToast({
          title: '已获得头像',
          icon: 'success',
          duration: 5000,
        })
        that.setData({
          name:res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl
        })
        wx.downloadFile({
          url:res.userInfo.avatarUrl,
          success: async function (res){
            that.setData({
              avatar: res.tempFilePath
            })
            wx.showToast({
              title: '正在绘图',
              icon: 'loading',
              duration: 10000,
            })
            that.createNewImg();
            setTimeout(function() {
              wx.hideToast()
              that.setData({
                showLotusHolder: true
              });
            }, 5000)
          },
          fail: console.error
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '正在绘图',
          icon: 'loading',
          duration: 10000,
        })
        that.createNewImg();
        setTimeout(function() {
          wx.hideToast()
          that.setData({
            showLotusHolder: true
          });
        }, 5000)
      }
    })
  },
  
})