/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-07 22:37:24
 *
 * 《处理数字类型相关的一些常用方法》
 */

// 生成指定范围随机数
/**
 * @param { number } min
 * @param { number } max
 */
export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//
export function randomNumInteger(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10)
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10)
    default:
      return 0
  }
}

/**
 * 金钱格式化
 * @param { number } num
 * @example formatMoney(10000) -> 10,000
 */
export function formatMoney(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 数字超过规定大小加上加号“+”，如数字超过99显示99+
 *
 * @param { number } val 输入的数字
 * @param { number } maxNum 数字规定界限
 */
export const outOfNum = (val, maxNum) => {
  val = val ? val - 0 : 0
  if (val > maxNum) {
    return `${maxNum}+`
  } else {
    return val
  }
}
