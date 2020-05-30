/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-05-17 21:26:19
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
 * 判断字符是否包含某值
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const include = (str, value) => str.includes(value)

/**
 * 判断字符是否以某个字符开头
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const beginWith = (str, value) => str.indexOf(value) === 0

/**
 * 全局替换某个字符为另一个字符
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
export const replace = (str, valueOne, valueTwo) => str.replace(new RegExp(valueOne, 'g'), valueTwo)

/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export const toCapitalLetter = str => {
  const strOne = str.toLowerCase()
  return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}

/**
 * 随机16进制颜色
 */
export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + n.slice(0, 6)
}
