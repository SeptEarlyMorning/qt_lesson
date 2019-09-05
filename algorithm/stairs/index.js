const w = new Map(); // 数据结构 Hash表

function f(n) {
    // 归 退出条件
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    if (w.has(n)) {
        return w.get(n)
    }
    var ret = f(n - 1) + f(n - 2);
    w.set(n, ret);
    return ret; // 递
}

// 内存溢出
console.log(f(1475));