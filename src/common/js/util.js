function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
  * 获取当前时间
  * 时间格式 YYYY-MM-DD HH:MM:SS
  * exmple: 2017-09-20 16:59:52
  **/
export function getTime() {
  let now = new Date()

  return `${now.getFullYear()}-${('0' + (now.getMonth() + 1)).substr(-2, 2)}-${('0' + now.getDate()).substr(-2, 2)} ${('0' + now.getHours()).substr(-2, 2)}:${('0' + now.getMinutes()).substr(-2, 2)}:${('0' + now.getSeconds()).substr(-2, 2)}`
}

export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}