// pages/graduate/graduate.js
import { fromAlbum as _fromAlbum, getAvatar } from '../../../modules/tools';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
  bindGetUserInfo: async function (e) {
    let avatar = await getAvatar(e);
    if(avatar){
      wx.redirectTo({
        url: '../answer/answer?avatar=' + avatar + '&&background=' + this.data.background,
      });
    }
  },

  
})