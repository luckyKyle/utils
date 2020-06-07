/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:25:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-07 21:39:55
 *
 * 《cookie的增删查》
 */

/**
 * cookie 获取
 * @param {String} key  属性
 */
export function getCookie(key) {
  const cookieStr = unescape(document.cookie)
  const arr = cookieStr.split('; ')
  let cookieValue = ''
  for (var i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=')
    if (temp[0] === key) {
      cookieValue = temp[1]
      break
    }
  }
  return cookieValue
}

/**
 * cookie 存贮
 * @param {String} key  属性
 * @param {*} value  值
 * @param String expire  过期时间,单位天
 */
export function setCookie(key, value, expire) {
  const d = new Date()
  d.setDate(d.getDate() + expire)
  document.cookie = `${key}=${value};expires=${d.toGMTString()}`
}

/**
 * cookie 删除
 * @param {String} key  属性
 */
export function removeCookie(key) {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}
