// pages/loveNankai__play/loveNankai__play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    level: "nomal",
    speed: 500,
    chances: 0,
    LowSo: "inactive",
    LowSi: "inactive",
    Do: "inactive",
    Re: "inactive",
    Mi: "inactive",
    Fa: "inactive",
    So: "inactive",
    La: "inactive",
    fileLowSo: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/LowSo.mp3",
    fileLowSi: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/LowSi.mp3",
    fileDo: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/Do.mp3",
    fileRe: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/Re.mp3",
    fileMi: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/Mi.mp3",
    fileFa: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/Fa.mp3",
    fileSo: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/LowSo.mp3",
    fileLa: "cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/La.mp3",
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      level: options.level,
      speed: options.speed,
      chances: options.chances,
    })
    wx.showToast({
      title: '资源加载中',
      icon: 'none',
      duration: 5000,
    })
    wx.cloud.downloadFile({
      //url: that.data.fileLowSo,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/LowSo.mp3',
      type: 'audio',
      success: res =>  {
        var tempFilePath = res.tempFilePath
        that.setData({
          fileLowSo: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
     // url: that.data.fileLowSi,
     fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/LowSi.mp3',
      type: 'audio',
      success: res =>{
        var tempFilePath = res.tempFilePath
        that.setData({
          fileLowSi: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
      //url: that.data.fileDo,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/Do.mp3',
      type: 'audio',
      success:res=> {
        var tempFilePath = res.tempFilePath
        that.setData({
          fileDo: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
      //url: that.data.fileRe,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/Re.mp3',
      type: 'audio',
      success:res=> {
        var tempFilePath = res.tempFilePath
        that.setData({
          fileRe: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
      //url: that.data.fileMi,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/Mi.mp3',
      type: 'audio',
      success:res=>{
        var tempFilePath = res.tempFilePath
        that.setData({
          fileMi: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
      //url: that.data.fileFa,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/Fa.mp3',
      type: 'audio',
      success:res=> {
        var tempFilePath = res.tempFilePath
        that.setData({
          fileFa: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
     fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/So.mp3',
      type: 'audio',
      success:res=> {
        var tempFilePath = res.tempFilePath
        that.setData({
          fileSo: tempFilePath
        })
      },
      fail: console.error
    })
    wx.cloud.downloadFile({
      //url: that.data.fileLa,
      fileID:'cloud://nankaituanwei-j5pm1.6e61-nankaituanwei-j5pm1-1257843133/resources/timeMachine/loveNankai/La.mp3',
      type: 'audio',
      success: res=> {
        var tempFilePath = res.tempFilePath
        that.setData({
          fileLa: tempFilePath
        })
      },
      fail: console.error
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
    setTimeout(function () {
      that.start()
    }, 3000)
  },

  onHide: function () {
    var lastTimer = setTimeout(function () { }, 1000)
    for (var i = 0; i < lastTimer; i++) {
      clearTimeout(i)
    }
  },

  onUnload: function () {
    var lastTimer = setTimeout(function () { }, 1000)
    for (var i = 0; i < lastTimer; i++) {
      clearTimeout(i)
    }
  },

  start: function () {
    var that = this
    var arr = new Array()
    //渤海之滨
    arr[0] = ['LowSo', 3]
    arr[1] = ['Do', 4]
    arr[2] = ['Do', 3]
    arr[3] = ['Do', 5]
    //白河之津
    arr[4] = ['Re', 3]
    arr[5] = ['Mi', 4]
    arr[6] = ['Mi', 3]
    arr[7] = ['Mi', 5]
    //巍巍我南开精神
    arr[8] = ['Re', 4]
    arr[9] = ['Mi', 3]
    arr[10] = ['Fa', 4]
    arr[11] = ['LowSi', 4]
    arr[12] = ['Re', 3]
    arr[13] = ['Do', 3]
    arr[14] = ['Do', 6]
    //汲汲骎骎
    arr[15] = ['LowSo', 3]
    arr[16] = ['Do', 4]
    arr[17] = ['Do', 3]
    arr[18] = ['Do', 5]
    //月异日新
    arr[19] = ['Re', 3]
    arr[20] = ['Mi', 4]
    arr[21] = ['Mi', 3]
    arr[22] = ['Mi', 5]
    //发煌我前途无垠
    arr[23] = ['Re', 4]
    arr[24] = ['Mi', 3]
    arr[25] = ['Fa', 4]
    arr[26] = ['LowSi', 4]
    arr[27] = ['Re', 3]
    arr[28] = ['Do', 3]
    arr[29] = ['Do', 6]
    //美哉大人
    arr[30] = ['So', 3]
    arr[31] = ['So', 4]
    arr[32] = ['Mi', 3]
    arr[33] = ['La', 5]
    //智勇真纯
    arr[34] = ['So', 3]
    arr[35] = ['So', 4]
    arr[36] = ['Fa', 4]
    arr[37] = ['Fa', 5]
    //以铸以陶
    arr[38] = ['Fa', 3]
    arr[39] = ['Fa', 4]
    arr[40] = ['Re', 3]
    arr[41] = ['So', 5]
    //文质彬彬
    arr[42] = ['Fa', 3]
    arr[43] = ['Fa', 4]
    arr[44] = ['Mi', 3]
    arr[45] = ['Mi', 5]
    //渤海之滨
    arr[46] = ['LowSo', 3]
    arr[47] = ['Do', 4]
    arr[48] = ['Do', 3]
    arr[49] = ['Do', 5]
    //白河之津
    arr[50] = ['Re', 3]
    arr[51] = ['Mi', 4]
    arr[52] = ['Mi', 3]
    arr[53] = ['Mi', 5]
    //巍巍我南开精神
    arr[54] = ['Re', 4]
    arr[55] = ['Mi', 3]
    arr[56] = ['Fa', 4]
    arr[57] = ['LowSi', 4]
    arr[58] = ['Re', 3]
    arr[59] = ['Do', 3]
    arr[60] = ['Do', 6]
    var timeout = 0
    var timers = new Array()
    for (var i = 0; i < arr.length; i++) {
      (function(i){
        var target = arr[i][0]
        var data = {}
        var timerId = setTimeout(function () {
          data[target] = "active"
          that.setData(data)
        }, timeout)
        timers.push(timerId)
        timeout += arr[i][1] * that.data.speed
        timerId = setTimeout(function () {
          if (that.data[target] == 'active') {
            if (that.data.chances == 0) {
              data[target] = "inactive"
              that.setData(data)
              for (var i = 0; i < timers.length; i++) {
                clearTimeout(timers[i])
              }
              that.fail()
            } else {
              that.setData({
                chances: that.data.chances - 1
              })
              data[target] = "inactive"
              that.setData(data)
            }
          }
        }, timeout)
        timers.push(timerId)
        timeout += that.data.speed / 2
      })(i)
    }
    setTimeout(function (){
      wx.redirectTo({
        url: '../success/success?level=' + that.data.level,
      })
    }, timeout)
  },

  click: function(e) {
    var that = this
    var id = e.currentTarget.id
    if (that.data[id] == 'active') {
      var fileName = that.data['file' + id]
      var audio = wx.createInnerAudioContext()
      audio.src = fileName
      audio.play()
      var data = {}
      data[id] = "inactive"
      that.setData(data)
    }
  },
  
  fail: function() {
    wx.redirectTo({
      url: '../fail/fail',
    })
  },

  
})