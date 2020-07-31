/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-17 20:56:40
 *
 * 《处理数组相关的一些常用方法》
 */

/**
 * 类数组转换成数组格式
 * @param {Array} list
 * @param {Number} start
 * @example  toArray(arguments, 1)
 */
export function toArray(list, start = 0) {
  let i = list.length - start
  let ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

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
 * @example difference([1, 2, 3], [2, 3, 4]) -> [ 1, 4 ]
 * @example difference( [2, 3, 4],[1, 2, 3]) -> [ 4, 1 ]
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
 * @example falttenDepth([1, [2], 3, 4])                      // [1, 2, 3, 4]
 * @example falttenDepth([1, [2, [3, [4, 5], 6], 7], 8], 2)   // [1, 2, 3, [4, 5], 6, 7, 8]
 */
export function falttenDepth(arr, depth = 1) {
  return depth != 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? falttenDepth(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), [])
}

/**
 * 数组乱序
 * @param {Array} arr
 * @returns {Array}
 * @example arrScrambling([1, 2, 3, 4])     //[ 2, 3, 4, 1 ]
 * @example arrScrambling([1, 2, 3, 4])     //[ 3, 1, 4, 2 ]
 */
export function arrScrambling(arr) {
  let index = arr.length
  while (index) {
    index -= 1
    const randomIndex = Math.floor(Math.random() * index)
    const middleware = arr[index]
    arr[index] = arr[randomIndex]
    arr[randomIndex] = middleware
  }
  return arr
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

/**
 * 返回数组中的每个第 n 个元素
 *
 * @export
 * @param {Array} arr
 * @param {Number} nth
 * @returns
 * @example everyNth([1, 3, 4, 3, 4, 3, 4, 3, 4],2)  //[ 1, 4, 4, 4, 4 ]
 */
export function everyNth(arr, nth) {
  return arr.filter((e, i) => i % nth === 0)
}

/**
 * 根据给定函数对数组元素进行分组
 *
 * @export
 * @param {Array} arr
 * @param {Function} func
 * @returns {Array}
 */
export function groupBy(arr, func) {
  return arr.map(typeof func === 'function' ? func : val => val[func]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    return acc
  }, {})
}

/**
 * 穷举SKU，将若干个不同的属性穷举出来
 *
 * @export
 * @param {chunks[]}
 * @returns {Array}
 * @example combine(['iPhone11', 'iPhone11 Pro'], ['yellow', 'blue'],['64G', '128G'])  // [
    [ 'iPhone11', 'yellow', '64G' ],
    [ 'iPhone11', 'yellow', '128G' ],
    [ 'iPhone11', 'blue', '64G' ],
    [ 'iPhone11', 'blue', '128G' ],
    [ 'iPhone11 Pro', 'yellow', '64G' ],
    [ 'iPhone11 Pro', 'yellow', '128G' ],
    [ 'iPhone11 Pro', 'blue', '64G' ],
    [ 'iPhone11 Pro', 'blue', '128G' ]
  ]
 */
export function combine(...chunks) {
  const result = []

  function helper(chunkIndex, prev) {
    const chunk = chunks[chunkIndex]
    const isLast = chunkIndex === chunks.length - 1
    for (let val of chunk) {
      const cur = prev.concat(val)
      if (isLast) {
        // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
        result.push(cur)
      } else {
        helper(chunkIndex + 1, cur)
      }
    }
  }

  // 从属性数组下标为 0 开始处理
  // 并且此时的 prev 是个空数组
  helper(0, [])

  return result
}
