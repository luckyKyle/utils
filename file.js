// 下载文件
export const saveFile = (data, filename) => {
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
export const fileFormatSize = size => {
  var i
  var unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  for (i = 0; i < unit.length && size >= 1024; i++) {
    size /= 1024
  }
  return (Math.round(size * 100) / 100 || 0) + unit[i]
}
