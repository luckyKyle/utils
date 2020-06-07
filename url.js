/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-07 21:35:36
 *
 * 《处理url相关的一些常用方法》
 */

/**
 *  获取 url 后面通过?传参的参数
 * @param {String} name
 */
export function getUrlParams(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const url = window.location.href
  const search = url.substring(url.lastIndexOf('?') + 1)
  const r = search.match(reg)
  if (r != null) return unescape(r[2])
  return null
}

/**
 * 删除url中指定的参数
 * @param { string } name
 */
export function removeUrlParam(name) {
  const baseUrl = location.origin + location.pathname + '?'
  const query = location.search.substr(1)
  if (query.indexOf(name) > -1) {
    var obj = {}
    var arr = query.split('&')
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=')
      obj[arr[i][0]] = arr[i][1]
    }
    delete obj[name]
    var url =
      baseUrl +
      JSON.stringify(obj)
        .replace(/[\"\{\}]/g, '')
        .replace(/\:/g, '=')
        .replace(/\,/g, '&')
    return url
  }
}

// http跳转https
export function httpsRedirect() {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1])
}
