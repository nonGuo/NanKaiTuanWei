// miniprogram/pages/Hello2021/avatar/avatar.js
import { fromAlbum as _fromAlbum, getAvatar } from '../../../modules/tools';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

   prev:function(){
    wx.redirectTo({
      url: '../../index/index',
    })
  },

  //从相册中选择头像
  fromAlbum: async function () {
    let avatar = await _fromAlbum();
    if(avatar){
      wx.redirectTo({
        url: '../answer/answer?avatar=' + avatar[0],
      });
    }
  },

  //授权上传头像
  getUserProfile: async function(e) {
    wx.getUserProfile({
      desc: '获取微信头像',
      success: async res => {
        let avatar = await getAvatar(res);
        if(avatar) {
          wx.redirectTo({
            url: '../answer/answer?avatar=' + avatar,
          })
        }
      }
    })
  }

})