/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-06-17 21:16:28
 *
 * 《处理日期相关的一些常用方法》
 */

export const ONE_DAY = 24 * 60 * 60 * 1000

/**
 * 十位补零
 * @param num (Number)
 * @returns padTime(0) -> '00'
 */
export function padTime(num) {
  return num < 10 ? '0' + num : num
}

/**
 *  日期转换时间戳
 */
export function timeTotimestamp(date) {
  return Date.parse(date)
}

/**
 *  时间格式的快速获取 HH:MM:SS
 * @param {传入日期对象} str
 * @example getColonTimeFromDate(new Date()) -> "18:04:00"
 */
export function getColonTimeFromDate(date = new Date()) {
  return date.toTimeString().slice(0, 8)
}

/**
 * 获取指定年月天数
 * @param {String} year 年份
 * @param {String} month 月份
 * @example getMonthDays(2020,5) -> 31
 */
export function getMonthDays(year = new Date().getFullYear(), month) {
  var d = new Date(year, month, 0)
  return d.getDate()
}

/**
 * 返回两个日期之间的差异 (以天为值)。
 * "计算Date对象之间的差异 (以天为单位)。"
 * @param {传入日期对象} obj
 * @example getDaysDiffBetweenDates('2018-05-05', '2018-05-14') -> 9
 */
export function getDaysDiffBetweenDates(dateInitial, dateFinal) {
  return (new Date(dateFinal) - new Date(dateInitial)) / ONE_DAY
}

/**
 *  时间戳转换为日期
 * "使用Date(), 将时间戳转换转换为可读格式)."
 * @param {传入的时间戳} timestamp
 * @param {布尔值是否需要时钟} needTime
 * @param {返回的格式 (1:yyyy-mm-dd或者2: dd/mm/yyyy )} format
 * @example timestampToTime(1489525200000, true) -> "2017-03-15 05:00:00"
 * @example timestampToTime(1489525200000, false) -> "2017-03-15"
 * @example timestampToTime(1489525200000, true,2) -> "2017/03/15 05:00:00"
 * @example timestampToTime(1489525200000, false,2) -> "2017/03/15"
 */
export function timestampToTime(timestamp, needTime = false, format = 1) {
  let date = new Date(timestamp)
  let Y = date.getFullYear()
  let M = padTime(date.getMonth() + 1)
  let D = padTime(date.getDate())
  let h = padTime(date.getHours())
  let m = padTime(date.getMinutes())
  let s = padTime(date.getSeconds())
  switch (format) {
    case 1:
      return needTime ? `${Y}-${M}-${D} ${h}:${m}:${s}` : `${Y}-${M}-${D}`
    case 2:
      return needTime ? `${D}/${M}/${Y} ${h}:${m}:${s}` : `${D}/${M}/${Y}`
    case 3:
      return needTime ? `${Y}年${M}月${D}日 ${h}:${m}:${s}` : `${Y}年${M}月${D}`
  }
}

/**
 * 判断是否为闰年
 * @param  {number} year 要判断的年份
 * @return {boolean} 返回布尔值
 */
export function isLeapYear(year) {
  return !(year % (year % 100 ? 4 : 400))
}

/**
 * 返回两个年份之间的闰年
 * @param  {number} start 开始年份
 * @param  {number} end 结束年份
 * @return {array}  arr 返回符合闰年的数组
 */
export function getLeapYears(start, end) {
  const arr = []
  for (let i = start; i < end; i++) {
    if (isLeapYear(i)) {
      arr.push(i)
    }
  }
  return arr
}

/**
 * 日期转时间戳
 * @param {String} time - 日期字符串，如'2018-8-8','2018,8,8','2018/8/8'
 * @returns {Number} 返回值为时间毫秒值
 */
export function timeToTimestamp(time) {
  return new Date(time).getTime()
}

/**
 *  根据日期返回星期几
 * @param {传入的日期} dateString
 * @example dateToWeek('2018-05-04') -> "星期五"
 */
export function dateToWeek(dateString) {
  let date
  if (dateString !== null || typeof dateString !== 'undefined') {
    date = new Date()
  } else {
    let dateArray = dateString.split('-')
    date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2])
  }
  return '星期' + '日一二三四五六'.charAt(date.getDay())
}

/**
 * 比较两个日期大小,如果1参早于2参则为true,否则为false
 * @param {any} d1  较晚的日期 "2007-2-2 7:30"
 * @param {any} d2  较早的日期"2007-1-31 8:30"
 * @returns Boolean
 * @example compareDate('2007-2-2 7:30', '2007-1-31 8:30') -> true
 */
export function compareDate(d1, d2) {
  return new Date(d1.replace(/-/g, "'/")) > new Date(d2.replace(/-/g, "'/"))
}

/**
 * 获取今天的日期
 * @returns '2018-05-04'
 * @example getToday() -> '2018-05-04'
 */
export function getToday() {
  const day = new Date()
  day.setTime(day.getTime())
  return day.getFullYear() + '-' + padTime(day.getMonth() + 1) + '-' + padTime(day.getDate())
}

/**
 * 验证一个日期是不是今天
 * @param  {string} val 需要验证的日期
 * @return {boolean} 返回布尔值
 */
export function isToday(val) {
  return new Date().toLocaleDateString() == new Date(val).toLocaleDateString()
}

/**
 * 验证一个日期是不是昨天
 * @param  {string} val 需要验证的日期
 * @return {boolean} 返回布尔值
 */
export function isYesterday(val) {
  const now = new Date()
  const yesterday = new Date(now - ONE_DAY)
  const test = new Date(val)
  return (
    yesterday.getYear() === test.getYear() &&
    yesterday.getMonth() === test.getMonth() &&
    yesterday.getDate() === test.getDate()
  )
}

/**
 * 获取上一周的日期,默认前7天的
 * @param {前几天的} pre
 * @returns '2018-05-04'
 * @example getPreWeekDay() -> '2018-04-27'
 */
export function getPreWeekDay(prev = 7) {
  let now = new Date()
  let oneWeekTime = prev * ONE_DAY
  let lastWeekDay = new Date(now - oneWeekTime)
  return (
    lastWeekDay.getFullYear() +
    '-' +
    padTime(lastWeekDay.getMonth() + 1) +
    '-' +
    padTime(lastWeekDay.getDate())
  )
}

/**
 * 获取两个日期范围
 * @param start: 开始时间(string:“2018-11-11”)
 * @param end: 结束时间(string:“2018-11-15”)
 * @returns 返回包含起止日期之间的所有日期的数组
 * @example getBetweenDateScope('2018-04-27','2018-04-29') -> ["2018-04-27", "2018-04-28", "2018-04-29"]
 */
export function getBetweenDateScope(start, end) {
  start = timeTotimestamp(start) // 将日期转为时间戳
  end = timeTotimestamp(end) // 将日期转为时间戳
  const arr = []

  if (start > end) throw Error('1参日期晚于2参日期')
  for (let i = start; i <= end; ) {
    arr.push(timestampToTime(i))
    i += ONE_DAY
  }
  return arr
}

/**
 * 获取倒推两个时间段的日期
 * @param count  指定几天之间, 默认是2，返回昨天和今天
 * @param startDate  开始日期，默认是“今天”
 * @returns targetDay:"2018-01-01", today:"2018-01-12"
 * @example getDateRange(2) ->{today: "2018-05-05", targetDay: "2018-05-04"}
 */
export function getDateRange(count = 2, start = getToday()) {
  let today = new Date(start)
  let targetDay = new Date()
  today.setTime(today.getTime())
  targetDay.setTime(targetDay.getTime() - ONE_DAY * (count - 1))
  today = timestampToTime(today)
  targetDay = timestampToTime(targetDay)
  return { today, targetDay }
}

/**
 *  获取指定之前几个月的跨度，根据传入的参数Number，返回一个包含每个月所有日期的二维数组
 * @param  {[Number]} number [数字]
 * @param  {[String]} date   [可选，日期（'2018-02-20'）]
 * @return {[Array]}
 * @example getPreMontAllDate(2) ->[ ["2018-04-01", ...., "2018-04-30"],["2018-03-01", ...."2018-03-31"]]
 */
export function getPreMontAllDate(number = 0, date) {
  const result = []
  const tempDate = date || timestampToTime(new Date())

  for (let i = 0; i <= number; i++) {
    let newDate = new Date(tempDate.replace(/\d+$/g, '1'))
    let unixTemp = newDate.setMonth(newDate.getMonth() - i)
    let tempArr = getMonthStartEnd(timestampToTime(new Date(unixTemp)))
    const { firstDay, lastDay } = tempArr
    result.push(getBetweenDateScope(firstDay, lastDay))
  }

  if (number > 0) {
    result.shift()
  }
  return result
}

/***
 *  返回本周第一天的时间
 *  @return {String} WeekFirstDay
 */
export function getWeekFirstDay() {
  const now = new Date()
  const WeekFirstDay = new Date(now - (now.getDay() - 1) * ONE_DAY)
  return WeekFirstDay
}

/***
 *  返回本周最后一天的时间
 *  @return {String} WeekLastDay
 */
export function getWeekLastDay() {
  let now = new Date()
  let WeekFirstDay = new Date(now - (now.getDay() - 1) * ONE_DAY)
  let WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000)
  return WeekLastDay
}

/***
 *  返回本月第一天的时间
 *  @return {String} MonthFirstDay
 */
export function getMonthFirstDay() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth())
}

/***
 *  返回本月最后一天的时间
 *  @return {String} MonthLastDay
 */
export function getMonthLastDay() {
  const now = new Date()
  const n = new Date(now.getFullYear(), now.getMonth() + 1)
  return new Date(n - ONE_DAY)
}

/**
 * 获取倒推几周的每个礼拜一和礼拜日
 * @param count 传入几周就返回几周，默认是上一周
 * @returns 返回数组
 * @example getPreWeeks(2)->[{monday: "2018-04-23", sunday: "2018-04-29"},{monday: "2018-04-16", sunday: "2018-04-22"}]
 */
export function getPreWeeks(count = 1) {
  const thisWeek = 8 // 因为包含"今天"，所以第一周算8天
  const days = []

  for (let i = 0; i < count; i++) {
    days.push(thisWeek + 7 * i)
  }
  const lastWeekDays = days.map(item => getDateRange(item).targetDay)
  return lastWeekDays.map(item => {
    const { monday, sunday } = getWeekStartEnd(item)
    return { monday, sunday }
  })
}

/**
 * 获取当前日期所在星期的的礼拜一和礼拜日
 * @param {string} [date='2018-01-01']  传入日期
 * @returns  { monday, sunday } 礼拜一和礼拜日
 * @example getWeekStartEnd('2018-05-05')->{monday: "2018-04-30", sunday: "2018-05-06"}
 */
export function getWeekStartEnd(date) {
  if (!date) return new Error('日期参数未传')
  const now = new Date(date)
  const nowTime = now.getTime()
  const day = now.getDay()
  const MondayTime = nowTime - (day - 1) * ONE_DAY
  const SundayTime = nowTime + (7 - day) * ONE_DAY
  let monday = new Date(MondayTime) // 礼拜一
  let sunday = new Date(SundayTime) // 礼拜日
  monday.setTime(monday.getTime())
  sunday.setTime(sunday.getTime())

  monday = timestampToTime(monday)
  sunday = timestampToTime(sunday)
  return { monday, sunday }
}

/**
 * 获取指定日期当月的第一天和最后一天
 * @param {string} [date='2018-01-01']  传入日期
 * @returns {firstDay, lastDay}  第一天和最后一天
 * @example getMonthStartEnd('2018-05-05')     // {firstDay: "2018-05-01", lastDay: "2018-05-31"}
 */
export function getMonthStartEnd(date = '2018-01-01') {
  let firstDay = new Date(date) // 第一天
  let lastDay = new Date(date) // 最后一天

  firstDay.setDate(1)
  lastDay.setMonth(lastDay.getMonth() + 1)
  lastDay.setDate(0)

  firstDay.setTime(firstDay.getTime())
  lastDay.setTime(lastDay.getTime())

  firstDay = timestampToTime(firstDay)
  lastDay = timestampToTime(lastDay)
  return { firstDay, lastDay }
}

/**
 * 格式化时间，转化为几分钟前，几秒钟前
 * @param timestamp 时间戳，单位是毫秒
 */
export function timeFormat(timestamp) {
  var mistiming = Math.round((Date.now() - timestamp) / 1000)
  var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒']
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1]
  for (var i = 0; i < arrn.length; i++) {
    var inm = Math.floor(mistiming / arrn[i])
    if (inm != 0) {
      return inm + arrr[i] + '前'
    }
  }
}

/**
 * 获取n天之前的日期 getDaysBeforeDate(10) 10天前
 *
 * @param day 天数
 */
export function getDaysBeforeDate(day) {
  var date = new Date(),
    timestamp,
    newDate
  timestamp = date.getTime()
  // 获取三天前的日期
  newDate = new Date(timestamp - day * 24 * 3600 * 1000)
  var year = newDate.getFullYear()
  // 月+1是因为js中月份是按0开始的
  var month = newDate.getMonth() + 1
  var day = newDate.getDate()
  if (day < 10) {
    // 如果日小于10，前面拼接0
    day = '0' + day
  }
  if (month < 10) {
    // 如果月小于10，前面拼接0
    month = '0' + month
  }
  return [year, month, day].join('/')
}

// 根据身份证获取出生年月
export function getBirthdayFromIdCard(idCard) {
  var birthday = ''
  if (idCard != null && idCard != '') {
    if (idCard.length == 15) {
      birthday = '19' + idCard.substr(6, 6)
    } else if (idCard.length == 18) {
      birthday = idCard.substr(6, 8)
    }

    birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-')
  }

  return birthday
}

/**
 * 根据身份证获取年龄
 * @param {String} UUserCard
 */
export function getAgeFromCard(UUserCard) {
  UUserCard = UUserCard + ''
  //获取年龄
  var myDate = new Date()
  var month = myDate.getMonth() + 1
  var day = myDate.getDate()
  var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1
  if (
    UUserCard.substring(10, 12) < month ||
    (UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day)
  ) {
    age++
  }
  return age
}

/**
 * 时间个性化输出功能
 *　1、< 60s, 显示为“刚刚”
 *　2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
 *　3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
 *　4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
 *　5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
 * @param {Date} time 时间戳
 * @returns {String}
 * @example timeFormat(1592399558015)  // 3分钟前
 */
function timeFormat(time) {
  const date = new Date(time)
  const curDate = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 10
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const curYear = curDate.getFullYear()
  const curHour = curDate.getHours()

  let result = ''

  if (year < curYear) {
    result = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute
  } else {
    const pastTime = curDate - date
    const pastH = pastTime / 3600000

    if (pastH > curHour) {
      result = month + '月' + day + '日 ' + hour + ':' + minute
    } else if (pastH >= 1) {
      result = '今天 ' + hour + ':' + minute + '分'
    } else {
      const pastM = curDate.getMinutes() - minute
      if (pastM > 1) {
        result = pastM + '分钟前'
      } else {
        result = '刚刚'
      }
    }
  }
  return result
}
