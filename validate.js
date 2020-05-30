/*
 * @Author: KyleWang
 * @Date: 2020-05-17 19:41:24
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-05-17 21:34:58
 *
 * 《处理参数类型相关的一些常用方法》
 */

/***************************
 * 处理类型参数判断的方法
 ***************************/

const toString = Object.prototype.toString

// 是否为数组类型
export const isArray = toString.call(val) === '[object Array]'

//
export const isRegExp = toString.call(val) === '[object RegExp]'

// 是否为布尔类型
export const isBool = val => typeof val === 'boolean'

// 是否为函数类型
export const isFunction = val => val && typeof val === 'function'

// 是否为数字类型
export const isNumber = val => typeof val === 'number'

// 是否为字符串类型
export const isString = val => typeof val === 'string'

// 是否为Symbol类型
export const isSymbol = val => typeof val === 'symbol'

// 是否为NaN
export const isNan = val => Object.is(val, NaN)

// 浮点数
export const isFloat = val => val.split('.').length >= 2

// 对象类型
export const isObj = val => Object(val) === val

// 日期类型
export const isDate = val => toString.call(val) === '[object Date]'

// DOM节点
export const isDomNode = object => isObj(object) && object.nodeType > 0

// falsy值
export const isFalsy = val => !val

// truthy值
export const isTruthy = val => !!val

// 奇数
export const isEven = n => isNumber(n) && n % 2 === 0

// 偶数
export const isOdd = n => isNumber(n) && (n % 2 === 1 || n % 2 === -1)

// 竖屏状态
export const isVertical = () => window.orientation === 180 || window.orientation === 0

// 横屏状态
export const isLandscape = () => window.orientation === 90 || window.orientation === -90

/************************
 * *  *  *  *  *  *  *
 * 使用正则判断业务场景
 * *  *  *  *  *  *  *
 ***********************/

/**
 * 验证中文
 * @param {String} val
 */
export const checkChinese = val => /[\u4e00-\u9fa5]/gm.test(val)

/**
 * 验证中文，数字或字母
 * @param {String} val
 */
export const checkChineseNumberLettter = data => /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g.test(data)

/**
 * 验证英文
 * @param {String} val
 */
export const checkEnglish = val => /^[a-z]+$/i.test(val)

/**
 * 验证大写
 * @param {String} val
 */
export const checkCapitalLetter = val => /^[A-Z]+$/.test(val)

/**
 * 验证数字
 * @param {Number} val
 */
export const checkNum = val => /^\d+$/.test(val)

/**
 * 验证小数
 * @param { string } value
 */
export const checkDecimal = value => /^\d+\.\d+$/g.test(value)

/**
 *  验证英文加数字
 * @param {String} val
 */
export const checkAlphaNumeric = val => /^[A-Za-z0-9]+$/.test(val)

/**
 *  验证合法邮编
 * @param {String} val
 */
export const checkPostcode = val => /^[1-9]\d{5}(?!\d)$/.test(val)

/**
 *  验证ip4
 * @param {String} val
 */
export const checkIp4 = val =>
  /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/.test(
    val
  )

/**
 *  验证ip6
 * @param {String} val
 */
export const checkIp6 = val =>
  /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(
    val
  )

/**
 *  验证有效身份证
 * @param {Number} val
 */
export const checkCard = val =>
  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    val
  )

/**
 * 验证中文名
 * @param { string } value
 */
export const checkChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value)

/**
 *  验证有效电话号码
 * @param {Number} val
 */
export const checkTelephone = val =>
  /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val)

/**
 *  验证有效url
 * @param {String} val
 */
export const checkUrl = val =>
  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(val)

/**
 *  验证有效日期
 * @param {String} val
 */
export const checkYyMmDd = val => /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/.test(val)

/**
 *  验证有效端口
 * @param {String} val
 */
export const checkPort = val =>
  /^([1-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(
    val
  )

/**
 *  验证外链
 * @param {String} val
 */
export const checkExternal = path => /^(https?:|mailto:|tel:)/.test(path)

/**
 * 验证16进制颜色
 * @param { string } value
 */
export const checkColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value)

/**
 * 检测浏览器内核
 * @param {String} val
 * @return 'trident', 'presto','webKit','gecko'
 */
export const checkBrowser = () => {
  const u = navigator.userAgent
  const obj = {
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1 //火狐内核
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
}

/**
 * 检测移动终端类型
 * @param {any} val
 * @return {String } ’ios', 'android‘, 'iPad'
 */
export const checkIosAndroidIpad = () => {
  const u = navigator.userAgent
  const obj = {
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPad: u.indexOf('iPad') > -1 //是否iPad
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
}

/**
 * 检测宿主环境是微信,qq 或 uc
 * @param {any} val
 * @return {String} 'weixin','qq,'uc'
 */
export const checkWeixinQqUc = () => {
  const u = navigator.userAgent
  const obj = {
    weixin: u.indexOf('MicroMessenger') > -1, //是否微信
    qq: u.match(/QQ/i) == 'qq' && !u.indexOf('MQQBrowser') > -1, //是否QQ
    uc: u.indexOf('UCBrowser') > -1
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
}
