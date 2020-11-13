/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-09-20 22:32:17
 *
 * 《字符串相关的一些常用方法》
 */

/**
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
export function trim(str, type = 1) {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return
  switch (type) {
    case 1:
      return str.replace(/\s/g, '')
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s)/g, '')
    case 4:
      return str.replace(/(\s$)/g, '')
    default:
      return str
  }
}

/**
 * 全局替换某个字符为另一个字符
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
export function replace(str, valueOne, valueTwo) {
  str.replace(new RegExp(valueOne, 'g'), valueTwo)
}

/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export function toCapitalLetter(str) {
  const strOne = str.toLowerCase()
  return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}

/**
 * 随机16进制颜色
 *
 * @export
 * @returns {void}
 * @example randomHexColorCode()   // '#ade8b7'
 */
export function randomHexColorCode() {
  const n = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + n.slice(0, 6)
}

/**
 * 截取字符串并加身略号
 *
 * @param { string } str 待转换的字符串
 * @param { number } limit  字符串限制长度
 * @example subText('abcdefghijk') // 'abcde...'
 */
export function subText(str, limit = 5) {
  return str.length === 0 ? '' : str.length > limit ? str.substr(0, limit) + '...' : str
}

/**
 * 大小写转换
 *
 * @param { string } str 待转换的字符串
 * @param { type = 1 } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 * @example turnCase('abcDefg', 1) // 'ABCDEFG'
 * @example turnCase('abcdefg', 2) // 'abcdefg'
 * @example turnCase('abcdefg', 3) // 'Abcdefg'
 */

export function turnCase(str, type = 1) {
  switch (type) {
    case 1:
      return str.toUpperCase()
    case 2:
      return str.toLowerCase()
    case 3:
      return str[0].toUpperCase() + str.substr(1).toLowerCase()
    default:
      return str
  }
}

// 转义html(防XSS攻击)
export const escapeHTML = str => {
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  )
}

/**
 * 单词截取
 * @export
 * @param {String} str 需要截取的字符串
 * @param {Number} len 指定长度
 * @returns {String}
 * @example words('I love javaScript!!'); // ["I", "love", "javaScript"]
 * @example words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
 */

export function words(str, pattern = /[^a-zA-Z-]+/) {
  return str.split(pattern).filter(Boolean)
}

/**
 * 获取指定长度的随机字符串
 * @export
 * @param {Number} length 指定长度，最大只能13位
 * @returns {String}
 * @example randomStr(10) // dd0190bf7b
 * @example randomStr(3) // dd0190bf7b
 */
export function randomStr(length = 1) {
  return Math.random()
    .toString(16)
    .substring(2, 2 + length)
}
