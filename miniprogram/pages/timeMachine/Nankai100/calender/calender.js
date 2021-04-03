// pages/calender/calender.js

Page({

  data: {
    wish: "",
    num: 0,
    history: [],
    wishes: [],
    monthname: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    head: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    calender: [],
    showDialog: false,
    chosen: 0,
    finish: false,
    seleted: {
      'year': 2018,
      'month': 4,
    },
    name: "",
    showCertificate: false,
    checkImage: 'https://image.potatofield.cn/Nankai100/check.png',
    background: "https://image.potatofield.cn/Nankai100/NK-100.png",
    shareImage:"https://image.potatofield.cn/Nankai100/share.jpg",
    createCertificate_button:"disabled",//按钮默认为不可点击
    imagePath:"https://image.potatofield.cn/Nankai100/certificate.jpg" //这里对应的是证书图片!!
  },

  //返回页面
  back: function () {
    wx.redirectTo({
      url: "../Nankai100"
    })
  },

  //生成日历
  creatCalender: function (seleted) {
    let that = this;
    let _calender = [];
    let year = seleted.year;
    let month = seleted.month;
    let dates = {
      firstDay: new Date(year, month - 1, 1).getDay(),
      lastMonthDays: [],// 上个月末尾几天
      currentMonthDys: [], // 本月天数
      nextMonthDays: [], // 下个月开始几天
      endDay: new Date(year, month, 0).getDay(),
      weeks: []
    }

    // 循环上个月末尾几天添加到数组
    for (let i = dates.firstDay, j = new Date(year, month - 1, 0).getDate(); i > 0; i-- , j--) {
      dates.lastMonthDays.push({
        'date': j,
        'month': month - 1,
        'checked': false,
        'i': -1,
      })
    }
    dates.lastMonthDays.reverse();

    // 循环本月天数添加到数组
    for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
      dates.currentMonthDys.push({
        'date': i,
        'month': month,
        'checked': false,
        'i': -1,
      })
    }
    
  for (let j = that.data.history.length - 1; j >= 0; j--) {
    for (let i = new Date(year, month, 0).getDate() - 1; i >= 0; i--) {
      if (that.data.history[j].year == year && that.data.history[j].month == month && that.data.history[j].date == i + 1) {
        dates.currentMonthDys.splice(i, 1, ({
          'date': i + 1,
          'month': parseInt(month),
          'checked': true,
          'i': j,
        }))
      }
    }
    }

    // 循环下个月开始几天 添加到数组
    for (let i = 1; i < 7 - dates.endDay; i++) {
      dates.nextMonthDays.push({
        'date': i,
        'month': parseInt(month) + 1,
        'checked': false,
        'i': -1,
      })
    }
    //连接数组
    _calender = _calender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays)

    this.setData({
      calender: _calender
    })
    console.log(this.data.calender)
  },

  onLoad: function (options) {
    let that = this
    //接收数据
    this.setData({
      wish: options.wish,
      'seleted.year': options.year,
      'seleted.month': options.month
    })
    if(options.finish=='false') {
      this.setData({
        finish:false
      })
    }
    else {
      this.setData({
        finish:true
      })
    }
    //获取历史打卡日期
    wx.getStorage({
      key: 'history',
      success: function (res) {
        that.setData({
          history: res.data
        })
      },
    })
    //获取以前想说的话
    wx.getStorage({
      key: 'wishes',
      success: function (res) {
        that.setData({
          wishes: res.data
        })
      },
    })
    console.log(that.data.history);
    console.log(that.data.wishes);
    if (!this.data.finish) { 
      //打卡
      {
        let _date = new Date();
        let year = _date.getFullYear(); //年
        let month = _date.getMonth() + 1;  //月
        let date = _date.getDate();//日
        let day = _date.getDay();// 天
        let today = {
          'year': year,
          'month': month,
          'date': date
        }
        console.log(that.data.wishes)
        let len = that.data.history.length
        if (len == 0 || (that.data.history[len - 1].year != today.year || that.data.history[len - 1].month != today.month || that.data.history[len - 1].date != today.date)) {
          that.data.history.push(today)
          wx.setStorage({
            key: 'history',
            data: that.data.history,
            success: function () {
              that.setData({
                history: that.data.history
              })
            }
          })
          that.data.wishes.push(that.data.wish)
          wx.setStorage({
            key: 'wishes',
            data: that.data.wishes,
            success: function () {
              that.setData({
                wishes: that.data.wishes
              })
            }
          })
        }
        that.setData({
          num:that.data.history.length
        })
        //开放“生成百日证书按钮”
        if (that.data.history.length >= 90) {
          that.setData({
            createCertificate_button:"" //开放按钮
          })
        }
      }
    }
    //日历
    this.creatCalender(this.data.seleted)
  },
  
  //生成证书canvas
  createCertificateCanvas:function() {
    var context = wx.createCanvasContext('certificateCanvas', this);
    context.drawImage('https://image.potatofield.cn/Nankai100/certificate.jpg');
    context.draw();
  },

  //生成证书
  createCertificate: function (e) {
    var that = this;
    that.createCertificateCanvas();
    wx.showToast({
      title: '正在生成证书',
      icon: 'loading',
      duration: 1000
    })
    setTimeout(function() {
      if (that.data.num >= 90) {
        that.setData({
          showCertificate: true,
        })
        wx.canvasToTempFilePath({
          canvasId: 'certificateCanvas',
          success:function(res) {
            var tempFilePath=res.tempFilePath;
            that.setData({
              imagePath:tempFilePath,
            });
          },
          fail:function() {
            wx.showToast({
              title: '图片生成失败',
              icon: 'none',
              duration: 1500
            })
          } 
        })
      }
    },1000);
  },

  //文字记录
  toggleDialog: function (e) {
    if (e.currentTarget.dataset.id >= 0) {
      let _wish = this.data.wishes[e.currentTarget.dataset.id]
      if (_wish.length == 0) {
        _wish = "无文字记录"
      }
      this.setData({
        showDialog: true,
        wish: _wish,
        chosen: e.currentTarget.dataset.day,
      })

    }
    else {
      this.setData({
        showDialog: false,
        wish: "",
        chosen: 0
      })
    }
  },

  //选择月份
  seletemonth: function (e) {
    if (e.currentTarget.dataset.id == 0) {
      if (this.data.seleted.month == 1) {
        this.setData({
          seleted: {
            'year': parseInt(this.data.seleted.year) - 1,
            'month': 12,
          }
        })
      } else {
        this.setData({
          "seleted.month": parseInt(this.data.seleted.month) - 1,
        })
      }
    } else {
      if (this.data.seleted.month == 12) {
        this.setData({
          seleted: {
            'year': parseInt(this.data.seleted.year) + 1,
            'month': 1,
          }
        })
      } else {
        this.setData({
          "seleted.month": parseInt(this.data.seleted.month) + 1,
        })
      }
    }
    this.creatCalender(this.data.seleted)
  },

  //保存至相册
  save: function () {
    var that = this
    wx.downloadFile({
      url:that.data.imagePath,
      success(res){
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          //保存成功
          success: function (res) {
            wx.showModal({
              content: '已保存到相册',
              showCancel: false,
              confirmText: '好的',
              confirmColor: '#333',
              success: function (res) {
                if (res.confirm) {
                  that.setData({
                    showCertificate: false,
                  })
                }
              }
            })
          },
          //保存失败
          fail: function () {
            that.setData({
              showCertificate: false,
            })
            wx.showToast({
              title: "保存失败",
              icon: 'none',
              duration: 1500
            })
          }
        })
      },
      fail:function() {
        wx.showToast({
          title: "下载失败",
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
      showCertificate: false,
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
      title: "南开百年 相伴百天",
      imageUrl: this.data.shareImage,
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
})