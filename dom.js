/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-05-17 21:27:39
 *
 * 《DOM相关的一些常用方法》
 */

/**
 * 将字符串复制到黏贴版
 * @param  str 需要复制的文字
 * eg: copyToClipboard('success!')
 */
export const copyToClipboard = (str = '') => {
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
 * 隐藏所有指定标签
 * 例: hide(document.querySelectorAll('img'))
 */
export const hideTag = (...el) => [...el].forEach(e => (e.style.display = 'none'))

/**
 * 检查是否包含子元素
 * @param { element } parent
 * @param { element } child
 * 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true
 */
export const elementContains = (parent, child) => parent !== child && parent.contains(child)

/**
 * 返回指定元素的生效样式
 * @param { element} el  元素节点
 * @param { string } ruleName  指定元素的名称
 */
export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName]

// 获取窗口可视范围的高度
export function getClientHeight() {
  let clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight
  }
  return clientHeight
}

// 获取窗口可视范围宽度
export function getPageViewWidth() {
  let d = document,
    a = d.compatMode == 'BackCompat' ? d.body : d.documentElement
  return a.clientWidth
}

export function getPageWidth() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth)
}

// 获取窗口尺寸
export function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  } else {
    // ie8及其以下
    if (document.compatMode === 'BackCompat') {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}

// 获取滚动条距顶部高度
export function getPageScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop
}

// 获取滚动条距左边的高度
export function getPageScrollLeft() {
  return document.documentElement.scrollLeft || document.body.scrollLeft
}

/**
 * 开启全屏
 * @param {*} element
 */
export function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}

/**
 * 关闭全屏
 * @param {*} element
 */
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

// 返回当前滚动条位置
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// 滚动到指定元素区域
export const smoothScroll = element => {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  })
}

// 平滑滚动到页面顶部
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

// 检查页面底部是否可见
export const bottomVisible = () => {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight || document.documentElement.clientHeight)
  )
}
