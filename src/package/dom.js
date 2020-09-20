/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-09-20 22:39:55
 *
 * 《DOM相关的一些常用方法》
 */

/**
 * 隐藏所有指定标签
 * 例: hide(document.querySelectorAll('img'))
 */
export function hideTag(...el) {
  ;[...el].forEach(e => (e.style.display = 'none'))
}

/**
 * 检查是否包含子元素
 * @param { element } parent
 * @param { element } child
 * 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true
 */
export function elementContains(parent, child) {
  return parent !== child && parent.contains(child)
}

/**
 * 返回指定元素的生效样式
 * @param { element} el  元素节点
 * @param { string } ruleName  指定元素的名称
 */
export function getStyle(el, ruleName) {
  return getComputedStyle(el)[ruleName]
}

/**
 * 检查元素是否具有指定的类
 * @param {dom}el 指定元素
 * @param {string}className 类名
 * @example hasClass(document.querySelector('p.special'), 'special') // true
 */

export function hasClass(el, className) {
  return el.classList.contains(className)
}

/**
 * 获取所有图像
 * @param {dom}el 指定元素
 * @param {string}includeDuplicates 是否需要排除重复元素
 * @example getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
 * @example getImages(document, false); // ['image1.jpg', 'image2.png', '...']
 */
export function getImages(el, includeDuplicates = false) {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'))
  return includeDuplicates ? images : [...new Set(images)]
}

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

// 获取页面宽度
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
 * @param {dom} element
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
export function getScrollPosition(el = window) {
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  }
}

// 滚动到指定元素区域
export function smoothScroll(element) {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  })
}

// 平滑滚动到页面顶部
export function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

// 检查页面底部是否可见
export function bottomVisible() {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight || document.documentElement.clientHeight)
  )
}
