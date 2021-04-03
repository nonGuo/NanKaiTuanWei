// miniprogram/pages/Hello2021/answer/answer.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:"",
    name:"南小开",
    flag1:"",
    flag2:"",
    flag3:"",
    imagePaths:["https://image.potatofield.cn/Hello2021/wishlist1.png","https://image.potatofield.cn/Hello2021/wishlist2.png"],
    imagePath:"",
    flags:["成功上岸","过四级","过六级","家人身体健康","光吃不胖","发量猛增","永不挂科","一次长途旅行","看完计划的所有电影","疫情早早结束","学到一项新的体育项目","读完计划的所有书目","看一场演唱会","养一只宠物","坚持规律作息（做合格早八人）","痘痘消失","多陪伴家人","学分绩猛增","钱包鼓起来","总能抢到教室里的心仪位置","自习室永远有座","再也不丢学子卡","早早刷完创高","追星女孩永不心碎","遇到靠谱的小组组员","ddl不堆积","谈一场恋爱","感情顺利","认识一些新朋友","选课再也不掉课","游戏上分顺利","和老友能够常聚","不睡觉也不困","遇到负责任的老师","转专业成功","宿舍翻新","常见好天气","停止内卷","能常与爱人在一起","打球永不受伤","有用不完的流量","实现奶茶自由","吃遍学校美食","写一首歌","考到驾照","不被催稿","收集很多好听的歌曲","拍一套写真","坚持写日记","多一些惬意的时光","校园网不卡不断","学校的小动物们都健康","食堂阿姨手不抖","再不忘带宿舍钥匙","手机电脑不断电","背书过目不忘","抢票手速快","克制购物欲望","继续买买买","下课后总能找到自行车","一眼就能发现自己的外卖","去支教","参与志愿者活动","找到合适的兼职","获得心仪大学的offer","实习顺利","找到一份好工作","自己和身边人都要开心","看到南开园的春夏","早日脱下口罩","买到回家的票","抽奖锦鲤附体","Tony能听懂要求","被偶像翻牌","稿子一遍过",],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      background: app.globalData.background
    });
    let that = this;
    this.data.avatar=options.avatar;
    //随机选取图片并下载
    let r=Math.floor(Math.random() * this.data.imagePaths.length);
    this.data.imagePath=this.data.imagePaths[r];
    r=Math.floor(Math.random()*this.data.flags.length);
    this.setData({
      flag1:this.data.flags[r],
    })
    r=Math.floor(Math.random()*this.data.flags.length);
    this.setData({
      flag2:this.data.flags[r],
    })
    r=Math.floor(Math.random()*this.data.flags.length);
    this.setData({
      flag3:this.data.flags[r],
    })
    wx.downloadFile({
      url: this.data.imagePath,
      success:function(res){
        that.data.imagePath= res.tempFilePath;
      }
    })
  },
  //获取文字
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
  changeflag1:function()
  {
    let r=Math.floor(Math.random() * this.data.flags.length);
    this.setData({
      flag1:this.data.flags[r]
    })
  },
  changeflag2:function()
  {
    let r=Math.floor(Math.random() * this.data.flags.length);
    this.setData({
      flag2:this.data.flags[r]
    })
  },
  changeflag3:function()
  {
    let r=Math.floor(Math.random() * this.data.flags.length);
    this.setData({
      flag3:this.data.flags[r]
    })
  },
  drawposter:function(e){
    wx.showToast({
        title:'正在绘制',
        icon:'loading',
        duration:10000,
        mask:true,
    })
    let that=this;
    let context=wx.createCanvasContext('poster');
    //获取背景头像信息
    let background=this.data.imagePath;
    wx.getImageInfo({
      src: this.data.avatar,
      success: function (res) {
        that.setData({
          width: res.width,
          height: res.height,
        })
      }
    }) 
    
    //绘制内容
    setTimeout(function () {
      let width = that.data.width
      let height = that.data.height
      let xClipFrom = 0;
      let yClipFrom = 0;
      if (width > height) {
        xClipFrom = (width - height) / 2;
        width = height;
      }
      else {
        yClipFrom = (height - width) / 2;
        height = width;
      }
      let avatar = that.data.avatar;
      context.drawImage(avatar,xClipFrom, yClipFrom, width, height, 185, 652, 270, 270);
      context.drawImage(background,0,0,1080,1920);
      let name = that.data.name;
      context.setFontSize(40);
      context.setFillStyle('#2a2a2a');
      context.setTextAlign('left');
      context.fillText(name, 595, 690);
      context.stroke();
      let flag1 = that.data.flag1;
      context.fillText(flag1, 426, 1072);
      context.stroke();
      let flag2 = that.data.flag2;
      context.fillText(flag2, 426, 1201);
      context.stroke();
      let flag3 = that.data.flag3;
      context.fillText(flag3, 426, 1341);
      context.stroke();
      context.draw();
    }, 2000)
  
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