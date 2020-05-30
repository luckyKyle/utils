/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:25:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-05-17 20:39:17
 *
 * 《session的增删查》
 */

/**
 * sessionStorage 存贮
 * @param {String} key  属性
 * @param {*} value 值
 */
export const setSession = (key, value) => {
  typeof value === 'object' && (value = JSON.stringify(value))
  window.sessionStorage.setItem(key, value)
}

/**
 * sessionStorage 获取
 * @param {String} key  属性
 */
export const getSession = key => window.sessionStorage.getItem(key)
/**
 * sessionStorage 删除
 * @param {String} key  属性
 */
export const removeSession = (key, value) => {
  window.sessionStorage.removeItem(key, value)
}

/**
 * sessionStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const setExpireSession = (key, value, expire) => {
  if (typeof value === 'object') value = JSON.stringify(value)
  sessionStorage.setItem(key, value)
  setTimeout(() => {
    sessionStorage.removeItem(key)
  }, expire)
}
