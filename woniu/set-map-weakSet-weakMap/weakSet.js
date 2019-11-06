// var test = {
//     name: 'test',
//     content: {
//         name: 'wn',
//         age: '18'
//     }
// };

// var ws = new WeakSet();
// ws.add(test.content);
// console.log(ws);
// ws.delete(test.content);
// console.log(ws);
// // WeakSet { }

const foos = new WeakSet();
class Foo {
    constructor() {
        foos.add(this);
    }
    method() {
        if (!foos.has(this)) {
            throw new TypeError('Foo.prototype.method 只能在 Foo 的实例上调用')
        }
    }
}