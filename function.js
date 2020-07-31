/**
 * 将字符串复制到黏贴版
 * @param  str 需要复制的文字
 * @example copyToClipboard('success!')
 */
export function copyToClipboard(str = '') {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

/**
 * 为promise对象新增个可拦截的方法
 * @export
 * @param {*} promise 传递回来的promise对象
 * @returns
 * @example obj = canAbortPromise(promise)   obj.abort("abort this promise")
 */
export function canAbortPromise(promise) {
  let res = null
  let abort = null

  const p1 = new Promise((resolve, reject) => {
    res = resolve
    abort = reject
  })

  p1.abort = abort
  promise.then(res, abort)

  return p1
}

export function canAbortPromise2(promise) {
  const obj = {}
  const p1 = new Promise((resolve, reject) => {
    obj.resolve = resolve
    obj.reject = reject
  })
  obj.promise = Promise.race([p1, promise])
  return obj
}

/**
 * 计算一个函数的执行消耗时间
 * @export
 * @param {Funcion} fn
 * @returns 返回时间消耗(毫秒)
 * @example executeTime(foo) -> 152.0700000000943
 */
export function executeConsumeTime(fn) {
  if (typeof fn !== 'function') throw new Error('fn is not a function')
  const start = performance.now()
  fn()
  const end = performance.now()
  return end - start
}

// 递归优化（尾递归）
export function tco(f) {
  let value
  let active = false
  let accumulated = []

  return function accumulator() {
    accumulated.push(arguments)
    if (!active) {
      active = true
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift())
      }
      active = false
      return value
    }
  }
}
