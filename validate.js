/*
 * @Author: KyleWang
 * @Date: 2020-05-17 19:41:24
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-07-27 21:07:35
 *
 * 《处理参数类型相关的一些常用方法》
 */

/***************************
 * 处理类型参数判断的方法
 ***************************/

const toString = Object.prototype.toString

// 是否为数组类型
export const isArray = val => toString.call(val) === '[object Array]'

// 正则类型
export const isRegExp = val => toString.call(val) === '[object RegExp]'

// 普通对象类型
export const isPlainObject = val => toString.call(val) === '[object Object]'

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
export const isDomNode = object => isObject(object) && object.nodeType > 0

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

// 中文名
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value)

// 英文名
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value)

// 英文
export const isEnglish = val => /^[A-Za-z]+$/.test(val)

// 仅小写英文
export const isLowerLetter = val => /^[a-z]+$/.test(val)

// 仅大写英文
export const isCapitalLetter = val => /^[A-Z]+$/.test(val)

// 验证不能包含字母
export const isNoWord = value => /^[^A-Za-z]*$/g.test(value)

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
export const isIDCard = value =>
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(
    value
  )

// 电话号码
export const isTelephone = val =>
  /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val)

// 邮箱地址
export const isEmail = value =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
    value
  )

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

// 验证外链
export const isExternal = path => /^(https?:|mailto:|tel:)/.test(path)

// 16进制颜色
export const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value)

// 验证火车车次
export const isTrainNum = value => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value)

// 验证手机机身码(IMEI)
export const isIMEI = value => /^\d{15,17}$/g.test(value)

// 验证统一社会信用代码
export const isCreditCode = value =>
  /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value)

// 验证迅雷链接
export const isThunderLink = value => /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value)

// 验证ed2k链接(宽松匹配)
export const isEd2k = value => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value)

// 验证磁力链接(宽松匹配)
export const isMagnet = value => /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value)

// 验证子网掩码
export const isSubnetMask = value =>
  /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value)

// 验证linux"文件夹"路径
export const isLinuxFolderPath = value => /^(\/[^/]+)+\/?$/g.test(value)

// 验证linux"文件"路径
export const isLinuxFilePath = value => /^(\/[^/]+)+$/g.test(value)

// 验证window"文件夹"路径
export const isWindowsFolderPath = value => /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value)

// 验证window下"文件"路径
export const isWindowsFilePath = value => /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value)

// 验证股票代码(A股)
export const isAShare = value =>
  /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(value)

// 验证版本号格式必须为X.Y.Z
export const isVersion = value => /^\d+(?:\.\d+){2}$/g.test(value)

// 验证视频链接地址（视频格式可按需增删）
export const isVideoUrl = value =>
  /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value)

// 验证图片链接地址（图片格式可按需增删）
export const isImageUrl = value =>
  /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value)

// 验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
export const isAccountNumber = value => /^[1-9]\d{9,29}$/g.test(value)

// 验证车牌号(新能源)
export const isLicensePlateNumberNER = value =>
  /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(
    value
  )

// 验证车牌号(非新能源)
export const isLicensePlateNumberNNER = value =>
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(
    value
  )

// 验证车牌号(新能源 + 非新能源)
export const isLicensePlateNumber = value =>
  /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
    value
  )

// 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
export const isMPStrict = value =>
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(
    value
  )

// 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
export const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value)

// 验证护照（包含香港、澳门）
export const isPassport = value =>
  /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(
    value
  )

// 验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
export const isWebAccount = value => /^[a-zA-Z]\w{4,15}$/g.test(value)

// 验证qq号格式
export const isQQNum = value => /^[1-9][0-9]{4,10}$/g.test(value)

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

// 判断IE浏览器版本和检测是否为非IE浏览器
export function getIEVersion() {
  const userAgent = navigator.userAgent //取得浏览器的userAgent字符串
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 //判断是否IE<11浏览器
  const isEdge = userAgent.indexOf('Edge') > -1 && !isIE //判断是否IE的Edge浏览器
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    const fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion == 7) {
      return 7
    } else if (fIEVersion == 8) {
      return 8
    } else if (fIEVersion == 9) {
      return 9
    } else if (fIEVersion == 10) {
      return 10
    } else {
      return 6 //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge' //edge
  } else if (isIE11) {
    return 11 //IE11
  } else {
    return false //不是ie浏览器
  }
}
