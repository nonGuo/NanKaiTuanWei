const app = getApp();
const util = require('../../utils/util.js')
const tools = require('../../modules/tools')

Page({

  data: {
    avatar: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/defaultAvatar.jpg",
    share: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/share.jpg",
    showAvatarHolder: false,
    backgrounds: [
      'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-1.png', 
      'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-2.png', 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-3.png',
      'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-4.png', 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-5.png',
      'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-6.png', 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-7.png',
      'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-8.png', 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-9.png',
      'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/91534259.jpg', 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-10.png', 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-11.PNG', 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-12.png', 'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/avatarCreator/NK101-13.png'],
      current: 0
  },

  //下载默认头像，背景图及分享图至临时目录
  onLoad: function() {
    var that = this;
    this.setData({
      bgImg: app.globalData.background
    })
    wx.cloud.downloadFile({
      fileID: this.data.avatar,
      success: res => {
        that.data.avatar = res.tempFilePath;
      }
    })
    let tempFilePath = [];
    for(let i =0; i < this.data.backgrounds.length; i++){
      wx.cloud.downloadFile({
        fileID: this.data.backgrounds[i],
        success: res => {
          tempFilePath[i] = res.tempFilePath;
        }
      })
    }
    this.setData({
      background: tempFilePath
    })
    wx.cloud.downloadFile({
      fileID: this.data.share,
      success: res => {
        that.setData({
          share: res.tempFilePath
        })
      }
    })
  },

  //更新选择的头像框
  select: function (e) {
    let i = e.detail.current;
    this.setData({
      current: i
    })
  },

  //采用canvas方法绘图
  createAvatar: async function (index) {
      var that = this;
      var context = wx.createCanvasContext('avatarCanvas');
      //获取尺寸用于计算裁剪方案
      wx.getImageInfo({
      src: that.data.avatar,
      success: function(res) {
        that.setData({
          width: res.width,
          height: res.height,
        })
      }
      })
    //等待获取图片尺寸，延迟计算
      setTimeout(function() {
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
      //倾斜头像框
      if(index > 1 && index < 7){
        context.rotate(7 * Math.PI / 180);
        context.drawImage(avatar, xClipFrom, yClipFrom, width, height, 120, 40, 450, 450);
        context.rotate(-7 * Math.PI / 180);
      } else {
        let dWidth;
        switch(true){
          case index === 0:
            dWidth = 500; break;
          case index === 1 || index === 12:
            dWidth = 550; break;
          case index > 6 && index < 9:
            dWidth = 300; break;
          case index === 9:
            dWidth = 360; break;
          case index > 9 && index < 12:
            dWidth = 600; break;
          case index === 13:
            dWidth = 450;
        }
        let dx = (600 - dWidth) / 2;
        let dy = dx;
        context.drawImage(avatar, xClipFrom, yClipFrom, width, height, dx, dy, dWidth, dWidth);
      }
      context.drawImage(that.data.background[index], 0, 0, 600, 600);
      context.draw();
      }, 2000)
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
      setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'avatarCanvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath, //将生成的图片路径传入前端html显示
          });
        },
        //生成失败
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

  //用户自主选择图片上传
  fromAlbum: async function () {
    let that = this;
    let result = await tools.fromAlbum();
    if(result){
      this.data.avatar = result[0];
      wx.showToast({
        title: '正在绘图',
        icon: 'loading',
        mask: true,
        duration: 10000
      })
      this.createAvatar(this.data.current);
      //延迟显示图片
      setTimeout(function () {
        wx.hideToast();
        that.setData({
          showAvatarHolder: true
        });
      }, 4000)
    }
  },

  //授权上传头像
  bindGetUserInfo: async function (e) {
    let that  = this;
    this.data.avatar = await tools.getAvatar(e);
    if(this.data.avatar){
      wx.showToast({
        title: '正在绘图',
        icon: 'loading',
        mask: true,
        duration: 10000
      })
      this.createAvatar(this.data.current);
      //延迟显示图片
      setTimeout(function () {
        wx.hideToast();
        that.setData({
          showAvatarHolder: true
        });
      }, 4000)
    }
  },

  //返回首页
  gotoIndex: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  //保存至相册
  save: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      //保存成功
      success(res) {
        wx.showModal({
          content: '头像已保存到相册，赶紧换上吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              that.setData({
                showAvatarHolder:false,
              })
            }
          }
        })
      },
      //保存失败
      fail: function () {
        that.setData({
          showAvatarHolder: false,
        })
        wx.showToast({
          title: "保存失败",
          icon: 'none',
          duration: 1500
        })
      }
    })
  },

  //取消保存图片
  cancel: function () {
    var that = this;
    that.setData({
      showAvatarHolder: false,
    })
    wx.showToast({
      title: "取消保存",
      icon: 'none',
      duration: 1500
    })
  },

  //分享
  onShareAppMessage: function (res) {
    return {
      title: "快来生成你的南开头像",
      imageUrl: this.data.share,
      success: function (res) {
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 1500
        })
      },
      fail: function (res) {
        wx.showToast({
          title: "分享失败",
          icon: 'none',
          duration: 1500
        })
      }
    }
  },
})