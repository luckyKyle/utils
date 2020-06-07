/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-07 21:42:15
 *
 * 《处理文件(上传下载)相关的一些常用方法》
 */

// 下载文件
export function saveFile(data, filename) {
  let blob = new Blob([data])
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    let link = document.createElement('a')
    let evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', false, false)
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    window.URL.revokeObjectURL(link.href)
  }
}

/**
 * 格式化文件单位
 * @param {String || Number} size  文件大小(kb)
 */
export function fileFormatSize(size) {
  let i
  let unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  let length = unit.length
  for (i = 0; i < length && size >= 1024; i++) {
    size /= 1024
  }
  return (Math.round(size * 100) / 100 || 0) + unit[i]
}

/**
 *  Base64格式转file
 *  @param { base64 } base64
 *  @param { string } filename 转换后的文件名
 */
export function base64ToFile(base64, filename) {
  let arr = base64.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let suffix = mime.split('/')[1] // 图片后缀
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, { type: mime })
}

/**
 *  Base64格式转Blob格式
 *  @param { base64 } base64
 */
export function base64ToBlob(base64) {
  let arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 *  Blob格式转Base64格式
 *  @param { blob } blob
 *  @param { string } fileName
 */
export function blobToFile(blob, fileName) {
  blob.lastModifiedDate = new Date()
  blob.name = fileName
  return blob
}

/**
 * file转base64
 * @param { * } file 图片文件
 */
export function fileToBase64(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function (e) {
    return e.target.result
  }
}
