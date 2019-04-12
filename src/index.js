import _cloneDeep from 'lodash/cloneDeep'
import format from 'date-fns/format'

export function dateFormat(time, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return time ? format(time, pattern) : ''
}

export function dateRangeFormat(dateRange, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if (Array.isArray(dateRange)) {
    const dr = dateRange.map(date => dateFormat(date, pattern))

    // startTime and endTime must exist togegher.
    if (dr[0] && dr[1]) {
      return dr
    }
    return []
  }
  return dateRange || []
}



// 删除对象里面为空的value，包括数组
export function omitKeys(obj) {
  const _obj = _cloneDeep(obj)
  Object.keys(_obj).forEach(key => {
    if (_obj[key] === null || _obj[key] === undefined || _obj[key] === '') {
      delete _obj[key]
    }
    if (Object.prototype.toString.call(_obj[key]) === '[object Array]') {
      if (_obj[key].length === 0) {
        delete _obj[key]
      }
    }

    if (Object.prototype.toString.call(_obj[key]) === '[object Object]') {
      _obj[key] = omitKeys(_obj[key])
    }
  })
  return _obj
}

// 把提交对象里面的数组形式变成字符串
export function formatArrryJoin(obj) {
  const _obj = _cloneDeep(obj)
  Object.keys(_obj).forEach(key => {
    if (Array.isArray(_obj[key]))  {
      // console.log(Object.prototype.toString.call(_obj[key][0]))
      if (key === 'position') {  // 岗位筛选 => cascader => 只取最后一级
        _obj[key] = _obj[key][_obj[key].length - 1]
      } else if (Object.prototype.toString.call(_obj[key][0]) === '[object Date]') {
        _obj[key] = dateRangeFormat(_obj[key]).join(',')
      } else {
        _obj[key] = _obj[key].join(',')
      }
    }
  })
  return _obj
}
