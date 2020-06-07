/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:20:39
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-07 21:45:53
 *
 * 《storage的增删改查》
 */
/***************************
处理Storage相关的一些常规方法
****************************/
/**
 * 存入Storage
 * @param key 设置指定key值
 * @param val 设置指定value值
 * @example setStorage('key', { a1: '111', a2: 222 })-> key:{ a1: '111', a2: 222 }
 */
export function setStorage(key, val) {
  typeof val === 'object' && (val = JSON.stringify(val))
  window.localStorage.setItem(key, val)
}
/**
 * 获取Storage
 * @param key 指定key值
 * @return  {any}
 * @example getStorage('key')-> { a1: '111', a2: 222 }
 */
export function getStorage(key) {
  let storageVal = localStorage.getItem(key)
  storageVal = storageVal === 'undefined' ? '' : JSON.parse(storageVal)
  return storageVal
}
/**
 * 判断是否有对应key值的storage， 如果没有返回指定的key值则可以自定义默认值，不设置则返回布尔值
 * @param key 指定key值
 * @param defaultVal
 * @return Boolean
 * @example hasStorage('key')-> true
 * @example hasStorage('key',{ a1: '111', a2: 222 })-> key:{ a1: '111', a2: 222 }
 */
export function hasStorage(key, defaultVal) {
  if (!defaultVal) {
    return !Object.is(this.get(key), null)
  }
  this.set(key, defaultVal)
  return this.get(key) ? this.set(key) : defaultVal
}
/**
 *  移除指定Storage
 * @param key 移除指定key值
 * @example removeStorage('key')
 */
export function removeStorage(key) {
  window.localStorage.removeItem(key)
}
/**
 * 清空所有Storage数据
 * @example clearStorage()
 */
export function clearStorage() {
  window.localStorage.clear()
}

/**
 * localStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export function setExpireStorage(key, value, expire) {
  if (typeof value === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
  setTimeout(() => {
    localStorage.removeItem(key)
  }, expire)
}
