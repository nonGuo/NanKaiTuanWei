const app = getApp();
const util = require('../utils/util')
wx.cloud.init()

// 审核图片，过审返回 true
async function verifyPhoto(avatar){
  let ifUpload = await util.uploadPhoto(avatar);
  if(!ifUpload){
    wx.showToast({
      title: '上传图片失败!',
      icon: 'none',
      duration: 1500
    });
    return false;
  }
  let verifyResult = await util.verifyRes(ifUpload, avatar.match(app.globalData.storePattern)[1]);
  if(verifyResult.result.errCode != 0){
    wx.showToast({
      title: '您的图片未能过审!',
      icon: 'none',
      duration: 2000,
    });
    return false;
  }
  return true;
}

// 获取用户头像，下载头像
async function getAvatar(e){
  let avatar;
  // 成功获取授权
  if(e.detail.userInfo){
    wx.showToast({
      title: '授权成功',
      icon: 'success',
      mask: true,
      duration: 5000
    });
    // 更换为高清头像
    let avatarUrl = String(e.detail.userInfo.avatarUrl).slice(0, -3).concat('0');
    // 下载头像
    avatar =  await (path => new Promise(function(resolve, reject){
      wx.downloadFile({
        url: path,
        success: async function(res){
          let ret = res.tempFilePath;
          // 审核图片
          let result = await verifyPhoto(ret);
          if(!result){
            ret = null;
          }
          // 传值
          resolve(ret);
        },
        fail: function(res){
          wx.showToast({
            title: '头像获取失败',
            icon: 'none',
            duration: 1500
          });
          resolve(null);
        }
      })
    }
    ))(avatarUrl);
  }else{
    wx.showToast({
      title: '授权失败',
      icon: 'none',
      duration: 1500
    });
    avatar = null;
  }
  return avatar;
}

// 从相册中选择图片
async function fromAlbum(num){
  if(!num){
    num = 1;
  }
  return await (()=> new Promise(function(resolve, reject){
    wx.chooseImage({
      count: num, // 最多可以选择的图片
      sourceType: ['album', 'camera'],  // 用户可以选择拍照或者相册上传
      success: async function(res){
        for(let i = 0; i < num; i++){
          let result = await verifyPhoto(res.tempFilePaths[i]);
          if(!result){
            resolve(null);
            return;
          }
        }
        resolve(res.tempFilePaths);
      },
      fail: function(res){
        wx.showToast({
          title: '上传图片失败!',
          icon: 'none',
          duration: 1500
        })
        resolve(null);
      }
    })
  }))();
}

module.exports.getAvatar = getAvatar;
module.exports.fromAlbum = fromAlbum;