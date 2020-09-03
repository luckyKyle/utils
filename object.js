import { isArray, isRegExp, isDate, isObject } from './validate'

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
 * deep clone
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
function clone(parent) {
  // 维护两个储存循环引用的数组
  const parents = []
  const children = []

  const _clone = parent => {
    if (parent === null) return null
    if (typeof parent !== 'object') return parent

    let child, proto

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = []
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime())
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent)
      // 利用Object.create切断原型链
      child = Object.create(proto)
    }

    // 处理循环引用
    const index = parents.indexOf(parent)

    if (index !== -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index]
    }
    parents.push(parent)
    children.push(child)

    for (const i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }

    return child
  }
  return _clone(parent)
}

/**
 * 对象深度克隆,
 * JSON.stringify深度克隆对象, 无法对函数 、RegExp等特殊对象的克隆,
 * 会抛弃对象的constructor,所有的构造函数会指向Object
 * 对象有循环引用,会报错
 * @param {Object}  obj 克隆的对象
 */
export function cloneDeep(obj) {
  return clone(obj)
}

export function deepClone(obj) {
  if (obj === null) return null
  const clone = Object.assign({}, obj)
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone
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
