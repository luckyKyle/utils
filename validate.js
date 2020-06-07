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

// 正则类型
export const isRegExp = toString.call(val) === '[object RegExp]'

// 普通对象类型
export const isPlainObject = toString.call(val) === '[object Object]'

// 日期类型
export const isDate = val => toString.call(val) === '[object Date]'

// 非null的对象类型
export const isObject = val => val !== null && typeof val === 'object'

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

// 仅中文
export const isChinese = val => /[\u4e00-\u9fa5]/gm.test(val)

// 中文，数字或字母
export const isChineseNumberLettter = data => /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g.test(data)

// 英文
export const isEnglish = val => /^[A-Za-z]+$/.test(val)

// 仅小写英文
export const isLowerLetter = val => /^[a-z]+$/.test(val)

// 仅大写英文
export const isCapitalLetter = val => /^[A-Z]+$/.test(val)

// 数字
export const isNum = val => /^\d+$/.test(val)

// 整数
export const isInteger = val => /^(-|\+)?\d+$/.test(val)

// 正整数
export const isPositiveNum = val => /^[1-9]d*$/.test(val)

// 负整数
export const isNegativeNum = val => /^-[1-9]d*$/.test(val)

// 非负浮点数
export const isNotNegativeFloatNum = val => /^\d+(\.\d+)?$/.test(val)

// 小数
export const isDecimal = value => /^\d+\.\d+$/g.test(value)

// 英文加数字
export const isAlphaNumeric = val => /^[A-Za-z0-9]+$/.test(val)

// 邮编
export const isPostcode = val => /^[1-9]\d{5}(?!\d)$/.test(val)

// ip4
export const isIp4 = val =>
  /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/.test(
    val
  )

// ip6
export const isIp6 = val =>
  /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(
    val
  )

// 有效身份证
export const isCard = val =>
  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    val
  )

// 中文名
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value)

// 电话号码
export const isTelephone = val =>
  /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val)

// 有效url
export const isUrl = val =>
  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(val)

// 有效日期
export const isYyMmDd = val => /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/.test(val)

// 有效端口
export const isPort = val =>
  /^([1-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(
    val
  )

// 外链
export const isExternal = path => /^(https?:|mailto:|tel:)/.test(path)

// 16进制颜色
export const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value)

/**
 * 检测浏览器内核
 * @param {String} val
 * @return 'trident', 'presto', 'webKit', 'gecko'
 */
export const isBrowser = () => {
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
export const isIosAndroidIpad = () => {
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
export const isWeixinQqUc = () => {
  const u = navigator.userAgent
  const obj = {
    weixin: u.indexOf('MicroMessenger') > -1, //是否微信
    qq: u.match(/QQ/i) == 'qq' && !u.indexOf('MQQBrowser') > -1, //是否QQ
    uc: u.indexOf('UCBrowser') > -1
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
}
