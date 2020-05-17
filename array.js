/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-05-17 20:52:52
 *
 * 《处理数组相关的一些常用方法》
 */

/**
 * 数组并集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @example andSet([1,2,3],[3,5,6]) -> [1,2,3,5,6]
 */
export const andSet = (arrOne, arrTwo) => {
  return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

/**
 * 数组交集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @example intersection([1,2,3],[3,5,6]) -> [3]
 */
export const intersection = (arrOne, arrTwo) => {
  return arrOne.filter(v => arrTwo.includes(v))
}

/**
 * 数组差集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @example difference([1, 2, 3] [2, 4, 5]) -> [1,3,4,5]
 */
export const difference = (arrOne, arrTwo) => {
  return arrOne.concat(arrTwo).filter(v => !arrOne.includes(v) || !arrTwo.includes(v))
}

/**
 * 两个数组合并成一个对象数组,考虑到复杂度,所以目前支持两个一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @param {oneKey} oneKey 选填,如果两个都未传,直接以 arrOne 的值作为 key,arrTwo 作为 value
 * @param {twoKey} twoKey
 */
export const arrTwoToArrObj = (arrOne, arrTwo, oneKey, twoKey) => {
  if (!oneKey && !twoKey) {
    return arrOne.map((oneKey, i) => ({ [oneKey]: arrTwo[i] }))
    // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
    // return Object.assign({}, arrOne, arrTwo)
  } else {
    return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
  }
}

/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export const objSum = (obj, key) => {
  return obj.reduce((prev, cur) => prev + cur[key], 0)
}

/**
 * 数组求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 * @example sum([1, 2, 3]) -> 6
 */
export const sum = arr => {
  return arr.reduce((prev, cur) => prev + cur, 0)
}

/**
 * 数组最大值
 * @param {Array} arr  数组
 */
export const getMax = arr => Math.max(...arr)

/**
 * 数组排序
 * @param {Array} arr  数组
 * @param {Boolean} ascendFlag   升序,默认为 true
 */
export const getSort = (arr, ascendFlag = true) => {
  return arr.sort((a, b) => {
    return ascendFlag ? a - b : b - a
  })
}
