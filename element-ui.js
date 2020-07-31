import Vue from 'vue'

const vm = new Vue()

export const showWarning = (message = '') => {
  vm.$message({
    type: 'warning',
    message
  })
}
export const showSuccess = (message = '') => {
  vm.$message({
    type: 'success',
    message
  })
}
export const showError = (message = '') => {
  vm.$message({
    type: 'error',
    message
  })
}

export const showInfo = (message = '') => {
  vm.$message(message)
}

export function showMessage(message='', type){
  vm.$message({
    
  })
}

export function showConfirm(str = '', title = '确定删除？', type = 'warning') {
  return vm.$confirm(str, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type
  })
}

/**
 * el-form属性rules配置
 * @param {*} message 报错信息
 * @param {*} validator 追加规则
 * @returns :void
 * @example [validator(' 请输入姓名 ')]
 * @example [validator(' 请输入姓名 '),()=>{}]
 */
export function validator(message = '', config = null, validator) {
  const defaultConfig = { required: true, trigger: 'blur' }
  if (validator instanceof Function) {
    return { ...defaultConfig, ...config, validator }
  } else {
    return { ...defaultConfig, ...config, message }
  }
}

/**
 * 验证必须输入有效数字
 * @param {String} emptyMsg 输入内容为空的报错信息
 * @param {String} invalidMsg 输入内容非法的报错信息
 * @returns {Function} 验证的回调
 * @example [validator('',validReuiredNumber('some word','some word'))]
 */
export const validReuiredNumber = (emptyMsg, invalidMsg) => {
  return (rule, value, callback) => {
    if (rule.required && value === '') return callback(new Error(emptyMsg))
    if (Number.isNaN(+value) || !(+value >= 0)) return callback(new Error(invalidMsg))
    return callback()
  }
}

// 限制输入框只能输入允许包含小数点的数字
export const formatNumber = (obj, property) => {
  obj[property] = obj[property].replace(/[^\d.]/g, '')
}

/**
 * 检测el-form
 * @param {*} ref el-form上挂载的ref引用属性名称
 * @returns Boolean
 */
export function checkForm(ref) {
  let isPass = false
  ref.validate(valid => {
    if (!valid) {
      return false
    } else {
      isPass = valid
    }
  })
  return isPass
}
