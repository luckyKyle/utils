/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-07 21:43:04
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
