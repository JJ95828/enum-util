/**
 * 返回数据类型 类 typeof
 * @param {*} val
 * @returns {string}
 */
const type = (val) => Object.prototype.toString.call(val).split(' ')[1].replace(']', '').toLocaleLowerCase()
/**
 * 是否为数组
 * @param {*} val
 * @returns {Boolean}
 */
const isArray = (val) => type(val) === 'array'
const freeze = (val) => Object.freeze(val)

const reduce = (array, callback, defaultValue = {}) => {
  array = array ?? []
  if (Array.prototype.reduce) {
    return freeze(array.reduce(callback, defaultValue))
  }
  for (var i = 0; i < array.length; i++) {
    defaultValue = callback(defaultValue, array[i], i, array)
  }
  return freeze(defaultValue)
}

/**
 * 枚举工具函数 利用反向映射值
 * @param {{[string]:string|number}|(string[])|(string|number[][])} value
 * @param {number} start 默认为 0；value 传值为 string[] 有效
 * @desc value 为string[] 默认设置下标为键值，以0为起始，想要修改起始值 可传 start
 * @desc value 为{[number]:string} 默认不处理，string => string，想要修改为 string => number 可传 start = true
 * @returns {Object} 数据不可修改
 */
export default (value, star = 0) => {
  if (isArray(value)) {
    // 子集为数组
    if (isArray(value[0])) {
      return reduce(value, (prv, cur) => {
        prv[(prv[cur[0]] = cur[1])] = cur[0]
        return prv
      })
    }
    if (type(value[0]) === 'string') {
      type(star) !== 'number' && (star = Number(star) || 0)
      return reduce(value, (prv, cur, ind) => {
        prv[(prv[cur] = ind + star)] = cur
        return prv
      })
    }
    return {}
  }
  if (type(value) === 'object') {
    return reduce(Object.keys(value), (prv, cur) => {
      if (['string', 'number'].includes(type(value[cur]))) {
        star && (cur = isNaN(+cur) ? cur : +cur)
        prv[(prv[value[cur]] = cur)] = value[cur]
      }
      return prv
    })
  }
  console.error(new TypeError(`value: ${value} typeof is not Array or Object`))
  return {}
}
