const app = getApp()
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 上传照片到云存储
const uploadPhoto = async function (tempFilePath) {
  return new Promise(async (resolve, reject) => {
    let uploadRes = await wx.cloud.uploadFile({
    cloudPath: app.globalData.storePrefix + tempFilePath.match(app.globalData.storePattern)[0],
    filePath: tempFilePath
    })
    if (uploadRes.statusCode >= 300) {
    resolve(false)
    }
    else {
      resolve(uploadRes.fileID)
    }
  })
}

const verifyRes = async function (fileID, type) {
  return new Promise(async (resolve, reject) => {
    let verifyResult = await wx.cloud.callFunction({
      name: 'verifyImage',
      data: {
        fileID: fileID,
        type: type
      }
    })
    resolve(verifyResult)
  })
}

module.exports = {
  formatTime: formatTime,
  uploadPhoto: uploadPhoto,
  verifyRes: verifyRes
}
