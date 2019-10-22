export function debounce (Func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout (timer)
    } 
    timer = setTimeout(() => {
      // 防抖函数关键的代码
      Func.apply(this, args)
    }, delay)
  }
}