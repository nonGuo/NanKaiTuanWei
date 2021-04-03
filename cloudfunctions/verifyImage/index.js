// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const typePrefix = "image/"

// 云函数入口函数
/**
 * 参数:
 * event:
 * {
 *  fileID: String 云存储ID
 *  type: String 后缀名 jpg/png/jfif/jpeg .etc
 * }
 * 
 * 返回:
 * return
 * {
 *  errCode: Number 错误码，正常返回0，失败返回87014(违规内容)
 *  errMsg: String 错误信息，正常返回"ok"，失败返回 "risky content"
 * }
 */
// 使用云函数下载，然后审核，最后返回审核结果
exports.main = async (event, context) => {
  let errCode = -1
  let errMsg = "Not verify the image."
  // 先把图片从云上download下来
  const fileID = event.fileID
  const type = event.type
  const res = await cloud.downloadFile({
    fileID: fileID
  })
  const Buffer = res.fileContent
  // 审查照片
  try {
    let verifyRes = await cloud.openapi.security.imgSecCheck({
      media: {
        contentType: typePrefix + type,
        value: Buffer
      }
    })
    console.log(verifyRes)
    errCode = verifyRes.errCode
    errMsg = verifyRes.errMsg
  } catch (err) {
    console.log(err)
    errCode = err.errCode
    errMsg = err.errMsg
  }
  // 删除云存储上的文件
  let deleteRes = await cloud.deleteFile({
    fileList: [fileID]
  })
  console.log('delete fileID:' + deleteRes.fileList[0].fileID)
  console.log('delete Msg:' + deleteRes.fileList[0].errMsg)
  return {
    errCode: errCode,
    errMsg: errMsg
  }
}