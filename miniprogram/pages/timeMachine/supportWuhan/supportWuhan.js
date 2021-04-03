const app = getApp();
const util = require('../../../utils/util.js')

Page({

  data: {
    avatar: "https://image.potatofield.cn/18-10-21/43988906.jpg",
    background: [],
    share: "https://image.potatofield.cn/whjy/whjy02.jpg",
    showAvatarHolder: false,
    photo: [
      "https://image.potatofield.cn/whyj/wuhanjy.png",
      "https://image.potatofield.cn/whyj/zhongguojy.png",
      "https://image.potatofield.cn/whyj/wuhanbs.png",
      "https://image.potatofield.cn/whyj/zhongguobs.png",
    ],
    current: 0
  },

  //下载默认头像，背景图及分享图至临时目录
  onLoad: function () {
    var that = this;
    wx.downloadFile({
      url: that.data.avatar,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          avatar: tempFilePath
        })
      }
    })
    var tempFilePathList = [];
    for(let i = 0; i < 4; i++) {
      wx.downloadFile({
        url:that.data.photo[i],
        success: function(res) {
          tempFilePathList[i] = res.tempFilePath;
        }
      })
    }
    this.setData({
      background: tempFilePathList
    })
    wx.downloadFile({
      url: that.data.share,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          share: tempFilePath
        })
      }
    })
  },

  //
  select: function (e) {
    let i = e.detail.current;
    this.setData({
      current: i
    })
  },

  //采用canvas方法绘图
  createAvatar: function () {
    var that = this;
    var context = wx.createCanvasContext('avatarCanvas');
    //背景图：校徽
    var background = that.data.background[that.data.current];
    context.drawImage(background, 0, 0, 600, 600);
    //获取尺寸用于计算裁剪方案
    wx.getImageInfo({
      src: that.data.avatar,
      success: function (res) {
        that.setData({
          width: res.width,
          height: res.height,
        })
      }
    })
    //等待获取图片尺寸，延迟计算
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
      context.arc(300, 300, 180, 0, 2 * Math.PI);
      context.save();
      context.clip();
      context.drawImage(avatar, xClipFrom, yClipFrom, width, height, 120, 120, 360, 360);
      context.restore();  //恢复画布大小
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
    var that = this;
    wx.chooseImage({
      count: 1, //最多可以选择的图片
      sourceType: ['album', 'camera'], //用户可以选择拍照或者相册上传
      success: async function (res) {
        //把照片传给avatar用来绘图
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          avatar: tempFilePaths[0], //res.tempFilePaths是一个string数组
        })
        let ifUpload = await util.uploadPhoto(that.data.avatar)
        if (!ifUpload) {
          // 上传失败
          wx.showToast({
          title: '上传图片失败!',
          icon: 'none',
          duration: 1500
          })
          return
        }
        let verifyResult = await util.verifyRes(ifUpload, that.data.avatar.match(app.globalData.storePattern)[1])
        if (verifyResult.result.errCode != 0) {
          that.setData({
            avatar: ''
          })
          wx.showToast({
            title: '您的图片未能过审!',
            icon: 'none',
            duration: 2000,
          })
          return
        }
        //提示框
        wx.showToast({
          title: '正在绘图',
          icon: 'loading',
          mask: true,
          duration: 5000
        })
        //canvas绘图
        that.createAvatar();
        //延迟显示图片
        setTimeout(function () {
          wx.hideToast();
          that.setData({
            showAvatarHolder: true
          });
        }, 4000)
      },
      //上传失败
      fail: function (res) {
        wx.showToast({
          title: '上传失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },

  //授权上传头像
  bindGetUserInfo: async function (e) {
    var that = this;
    //成功获取授权
    if (e.detail.userInfo) {
      wx.showToast({
        title: '授权成功',
        icon: 'success',
        mask: true,
        duration: 5000
      })
      that.setData({
        name: e.detail.userInfo.nickName,
        avatar: e.detail.userInfo.avatarUrl
      })
      wx.downloadFile({
        url: e.detail.userInfo.avatarUrl,
        success: async function (res) {
          //把照片传给avatar用来绘图
          that.setData({
            avatar: res.tempFilePath,
          })
          let ifUpload = await util.uploadPhoto(that.data.avatar)
        if (!ifUpload) {
          // 上传失败
          wx.showToast({
          title: '上传图片失败!',
          icon: 'none',
          duration: 1500
          })
          return
        }
        let verifyResult = await util.verifyRes(ifUpload, that.data.avatar.match(app.globalData.storePattern)[1])
        if (verifyResult.result.errCode != 0) {
          that.setData({
            avatar: ''
          })
          wx.showToast({
            title: '您的图片未能过审!',
            icon: 'none',
            duration: 2000,
          })
          return
        }
          //提示框
          wx.showToast({
            title: '正在绘图',
            icon: 'loading',
            mask: true,
            duration: 5000
          })
          //canvas绘图
          that.createAvatar();
          //延迟显示图片
          setTimeout(function () {
            wx.hideToast();
            that.setData({
              showAvatarHolder: true
            });
          }, 4000)
        },
        //下载头像失败
        fail: function (res) {
          wx.showToast({
            title: '头像获取失败',
            icon: 'none',
            duration: 1500
          })
        }
      })
    }
    //获取授权失败
    else {
      wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1500
      })
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
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.writePhotosAlbum'] == undefined) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console(1)
            },
          })
        } else if (res.authSetting['scope.writePhotosAlbum'] == false) {
          wx.openSetting({
            success(res) {
              console.log(res.authSetting)
              res.authSetting = {
                "scope.writePhotosAlbum": true,
              }
            }
          })
        }
      }
    })
    console.log(that.data.imagePath);
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
                showAvatarHolder: false,
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
    // that.context.clearRect(0,0,600,600);
    // that.context.draw();
  },

  //分享
  onShareAppMessage: function (res) {
    return {
      title: "快来为武汉加油",
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