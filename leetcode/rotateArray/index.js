// [a, b, c, d, e, f, g, h]    k = 2
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const k = 2;

function RShift1(list, k) {
    const copy = [...list];
    const n = copy.length;

    if (k % n === 0) {
        return copy;
    }

    for (let i = 0; i < n; i++) {
        list[i] = copy[(k + i) % n];
    }
    return list;
}

function RShift2(list, k) {
    const n = list.length;

    if (k % n === 0) {
        return list;
    }
    let cnt = Math.abs(k > 0 ? k % n : n + (k % n));
    let t = null;

    while (cnt--) {
        t = list[n - 1];
        // 右移一位
        for (let i = n - 1; i > 0; i--) {
            list[i] = list[i - 1];
        }
        list[0] = t;
    }
    return list;
}

function RShift3(list, k) {
    const n = list.length;
    let i = Math.abs(k > 0 ? k % n : n + (k % n));
    return list.concat([...list]).slice(n - i, 2 * n - i);
}

function reverse(list, start, end) {
    let t = null;
    while (start < end) {
        t = list[start];
        list[start] = list[end];
        list[end] = t;
        start++;
        end--;
    }
}

function RShift4(list, k) {
    const n = list.length;
    if (k % n === 0) {
        return list;
    }

    reverse(list, 0, n - k - 1);
    reverse(list, n - k, n - 1);
    reverse(list, 0, n - 1);
    return list;
}

console.log(RShift1(arr, k));
console.log(RShift2(arr, k));
console.log(RShift3(arr, k));
console.log(RShift4(arr, k));