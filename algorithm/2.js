const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';

function isBalanced(exp) {
    // 数组用于实现栈或队列是最便宜的，连续的
    let info = exp.split(''),
        stack = []; // push pop
    for (let i = 0; i < info.length; i++) {
        let el = info[i];
        if (el == '{') {
            stack.push('{');
        } else if (el == '}') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}