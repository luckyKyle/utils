import { isArray, isRegExp, isDate, isObject } from './validate'
import { find } from './array'
/**
 * 深度冻结对象
 * @param obj 需要冻结的对象
 * @return Object
 * @example freezeObj(data)
 */
export function deepFreeze(obj) {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop])
  })
  return Object.freeze(obj)
}

/**
 * 宽松对比两个对象是否相等
 * from vue@2.6.11 line 266
 * if they are plain objects, do they have the same shape?
 */
export function looseEqual(a, b) {
  if (a === b) {
    return true
  }
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        )
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return (
          keysA.length === keysB.length &&
          keysA.every(key => {
            return looseEqual(a[key], b[key])
          })
        )
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function isType(obj, type) {
  if (typeof obj !== 'object') return false
  let flag
  switch (type) {
    case 'Array':
      flag = isArray
      break
    case 'Date':
      flag = isDate
      break
    case 'RegExp':
      flag = isRegExp
      break
    default:
      flag = false
  }
  return flag
}

/**
 * 查看一个对象是否有指定的key值
 * @export
 * @param {Object} obj
 * @param {Array} keys
 * @returns {Boolean}
 * @example const obj = {
              a: 1,
              b: { c: 4 },
              'b.d': 5
            }
            hasKey(obj, ['a']); // true
            hasKey(obj, ['b']); // true
            hasKey(obj, ['b', 'c']); // true
            hasKey(obj, ['b.d']); // true
            hasKey(obj, ['d']); // false
            hasKey(obj, ['c']); // false
            hasKey(obj, ['b', 'f']); // false
 */
export function hasKey(obj, keys) {
  return (
    keys.length > 0 &&
    keys.every(key => {
      if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false
      obj = obj[key]
      return true
    })
  )
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepClone(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}
