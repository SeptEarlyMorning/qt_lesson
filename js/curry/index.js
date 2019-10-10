// 普世
function checkByRegExp(reg, string) {
    return reg.test(string);
}

console.log(checkByRegExp(/^1[3-9]\d{9}$/, '19029110384'));
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '1790732099@qq.com'))
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '1790732099@qq.cn.com'))
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '1790732099@com'))