const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';
// js 正则
function isBalanced(exp) {
    const reg = /{}/g;
    let len;
    do {
        len = exp.length;
        exp = exp.replace(reg, '');
        console.log('---');
    } while (len != exp.length && exp.length);
    return exp.length === 0;
}
console.log(isBalanced(expression));