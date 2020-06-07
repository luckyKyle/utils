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

export const showConfirm = (str = '', title = '确定删除？', type = 'warning') =>
  vm.$confirm(str, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type
  })

/**
 * el-form属性rules配置
 * @param {*} message 报错信息
 * @param {*} validator 追加规则
 * @returns :void
 * @example [validator(' 请输入姓名 ')]
 * @example [validator(' 请输入姓名 '),()=>{}]
 */
export function validator(message = '', validator) {
  const obj = { required: true, trigger: 'blur' }
  if (validator instanceof Function) {
    return { ...obj, validator }
  } else {
    return { ...obj, message }
  }
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
