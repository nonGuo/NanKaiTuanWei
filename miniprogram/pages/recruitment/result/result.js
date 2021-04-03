// pages/recruitment/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:[0,0,0,0,0,0],
    texthide:[true,true,true,true,true,true,true]
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    let that=this;
    this.setData({
      'result[0]':options.Q1,
      'result[1]': options.Q2,
      'result[2]': options.Q3,
      'result[3]': options.Q4,
      'result[4]': options.Q5,
      'result[5]': options.Q6
    })
    let i=0;
    for (i = 0; i < 6; i++){
      if(this.data.result[i] == "true"){
        break;
      }
    }
    if(i==6){
      that.setData({
        'texthide[6]':false
      })
    }else{
      let rand=Math.floor(Math.random()*6);
      while(that.data.result[rand] != 'true'){
        rand = Math.floor(Math.random() * 6);
      }
      that.data.texthide[rand]=false;
      that.setData({
        texthide:that.data.texthide
      })
    }
  },

  //南开一百周年签到日历
  gotoNankai100: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/Nankai100/Nankai100',
    })
  },

  //头像生成器
  gotoAvatarCreator: function () {
    wx.navigateTo({
      url: '/pages/avatarCreator/avatarCreator',
    })
  },
  //九九南开
  gotoNinetyNine: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/ninetyNine/ninetyNine',
    })
  },

  //抽奖抽签小助手
  gotoLottery: function () {
    wx.navigateTo({
      url: '/pages/lottery/lottery',
    })
  },

  //五四青年节
  gotoYouthDay:function(){
    wx.navigateTo({
      url: '/pages/timeMachine/youthDay/youthDay',
    })  
  },
  //劳动节
  gotoLaborDay2019: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/laborDay2019/laborDay2019',
    })
  },
  //清明节
  gotoQingming: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/qingming/qingming',
    })
  },
  //改革开放知多少
  gotoReformForty: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/reformForty/reformForty',
    })
  },
  //我与南开谈恋爱
  gotoLoveNankai: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/loveNankai/loveNankai',
    })
  },
  ///荷花节
  gotoLotus: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/lotus/lotus',
    })
  },
  //许愿2019
  gotoFlagNineteen: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/wishNineteen/wishNineteen',
    })
  },
  //抽奖抽签小助手
  gotoLottery: function () {
    wx.navigateTo({
      url: '/pages/lottery/lottery',
    })
  },
  //南开华容道
  gotoHuarongdao: function () {
    wx.navigateTo({
      url: '/pages/lottery/lottery',
    })
  },
  //出口
    exit: function () {
    wx.redirectTo({
      url: '../../index/index',
    })
  },
  //查看更多
    showmore: function () {
    wx.navigateTo({
      url: '/pages/recruitment/more',
    })
  },
    //时光机
  gotoTimeMachine: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },
  //问卷
  join:function(){
    wx.navigateToMiniProgram({
      appId: 'wxd947200f82267e58',
      path: 'pages/wjxqList/wjxqList?activityId=43895097'
    })
  }
})

