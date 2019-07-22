// Math.max()
const IMath = {}; // namespace

/**
 * @params: number   NaN(Not a number)
 * @return: umber   返回最大值
 */
IMath.max = function(...args) {
    // console.log(arguments, arguments.length);
    for (let i = 0; i < args.length; i++) {
        // 类型检测
        if (typeof args[i] !== 'number') {
            return NaN;
        }
    }
}
console.log(IMath.max(...[1, 2, 3, 4]));