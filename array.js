/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-07 21:39:12
 *
 * 《处理数组相关的一些常用方法》
 */

/**
 * 数组并集,只支持一维数组
 * @param {Array} arr1
 * @param {Array} arr2
 * @example andSet([1,2,3],[3,5,6]) -> [1,2,3,5,6]
 */
export function andSet(arr1, arr2) {
  return arr1.concat(arr2.filter(v => !arr1.includes(v)))
}

/**
 * 数组交集,只支持一维数组
 * @param {Array} arr1
 * @param {Array} arr2
 * @example intersection([1,2,3],[3,5,6]) -> [3]
 */
export function intersection(arr1, arr2) {
  return arr1.filter(v => arr2.includes(v))
}

/**
 * 数组差集,只支持一维数组
 * @param {Array} arr1
 * @param {Array} arr2
 * @example difference([1, 2, 3] [2, 4, 5]) -> [1,3,4,5]
 */
export function difference(arr1, arr2) {
  return arr1.concat(arr2).filter(v => !arr1.includes(v) || !arr2.includes(v))
}

/**
 * 两个数组合并成一个对象数组,考虑到复杂度,所以目前支持两个一维数组
 * @param {Array} arr1
 * @param {Array} arr2
 * @param {oneKey} oneKey 选填,如果两个都未传,直接以 arr1 的值作为 key,arr2 作为 value
 * @param {twoKey} twoKey
 */
export function arr2ToArrObj(arr1, arr2, oneKey, twoKey) {
  if (!oneKey && !twoKey) {
    return arr1.map((oneKey, i) => ({ [oneKey]: arr2[i] }))
    // 或者,此方法针对将 arr2 的索引作为 key 的情况,arr2 值会覆盖 arr1
    // return Object.assign({}, arr1, arr2)
  } else {
    return arr1.map((oneKey, i) => ({ oneKey, twoKey: arr2[i] }))
  }
}

/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export function objSum(obj, key) {
  return obj.reduce((prev, cur) => prev + cur[key], 0)
}

/**
 * 数组求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 * @example sum([1, 2, 3]) // 6
 */
export function sum(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0)
}

/**
 * 数组最大值
 * @param {Array} arr  数组
 */
export function getMax(arr) {
  return Math.max(...arr)
}

/**
 * 数组最小值
 * @param {Array} arr  数组
 */
export function getMin(arr) {
  return Math.min(...arr)
}

/**
 * 数组排序
 * @param {Array} arr  数组
 * @param {Boolean} ascendFlag  默认升序
 * @returns {Array}
 * @example getSort([3, 1, 2, 5])         //[ 1, 2, 3, 5 ]
 * @example getSort([3, 1, 2, 5],false)   //[ 5, 3, 2, 1 ]
 */
export function getSort(arr, ascendFlag = true) {
  return arr.sort((a, b) => (ascendFlag ? a - b : b - a))
}

/**
 * 统计数组中相同项的个数
 * @param {Array} arr  数组
 * @returns {Object}
 * @example getTimes([1, 2, 2, 3, 3, 3])  // { '1': 1, '2': 2, '3': 3 }
 */
export function getTimes(arr) {
  return arr.reduce((obj, name) => {
    obj[name] = obj[name] ? ++obj[name] : 1
    return obj
  }, {})
}

/**
 * 将数组平铺到指定深度
 * 使用递归，为每个深度级别 depth 递减 1 。
 * 基本情况下，depth 等于 1 停止递归。 省略第二个参数，depth 只能平铺到 1 (单层平铺) 的深度。
 * @param {Array} arr  数组
 * @returns {Array}
 * @example flatten([1, [2], 3, 4])                      // [1, 2, 3, 4]
 * @example flatten([1, [2, [3, [4, 5], 6], 7], 8], 2)   // [1, 2, 3, [4, 5], 6, 7, 8]
 */
export function flatten(arr, depth = 1) {
  return depth != 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), [])
}

/**
 * 数组乱序
 * @param {Array} arr
 * @returns {Array}
 * @example arrScrambling([1, 2, 3, 4])     //[ 2, 3, 4, 1 ]
 * @example arrScrambling([1, 2, 3, 4])     //[ 3, 1, 4, 2 ]
 */
export function arrScrambling(array) {
  let index = array.length
  while (index) {
    index -= 1
    const randomIndex = Math.floor(Math.random() * index)
    const middleware = array[index]
    array[index] = array[randomIndex]
    array[randomIndex] = middleware
  }
  return array
}

/**
 * 将数组块划分为指定大小的较小数组。
 * @export
 * @param {Array} arr
 * @param {Number} size
 * @returns {Array}
 * @example chunk([1, 2, 3, 5], 3)    // [ [ 1, 2, 3 ], [ 5 ] ]
 * @example chunk([1, 2, 3, 5], 2)    // [ [ 1, 2 ], [ 3, 5 ] ]
 */
export function chunk(arr, size) {
  return Array.from(
    {
      length: Math.ceil(arr.length / size)
    },
    (v, i) => arr.slice(i * size, i * size + size)
  )
}
