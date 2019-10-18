// 1
console.log('---1---');
const box = { a: 10, b: { c: 100 } };
const box1 = box;
Object.freeze(box); // 冻结第一层，不准再次修改
box1.a = 100;
box1.b.c = 1000;
console.log(box);
const arr = [
    3, [0, 1],
    [1, 2]
];
Object.freeze(arr);
arr[0] = 1;
arr[1][0] = 123;
console.log(arr);

// 2
console.log('---2---');
// const { name } = { name: 'lihau' };
const { name: myName } = { name: 'lihau' };
console.log(myName);

// 3
console.log('---3---');
const add = () => {
    const cache = {};
    return num => {
        if (num in cache) {
            return `from cache ${num}`;
        } else {
            const r = num + 10;
            cache[num] = r;
            return `calcul ${num}`;
        }
    };
};
//addFunc 是一个函数
const addFunc = add();
console.log(addFunc(10));
console.log(addFunc(10));
console.log(addFunc(2 * 5));

// 4
console.log('---4---');
const arr4 = ['lihua', 'lilei'];
// const obj = { 0: 'a', 1: 'b', 4: 'c' };
for (const item1 in arr4) { // 枚举一个对象的属性 arr4[item1]
    console.log(item1);
}
for (const item2 of arr4) { // forof 可用来遍历可迭代对象(数组 Map Set String) 
    console.log(item2);
}

// 5
console.log('---5---');
// node 没有 Windows 
var status = 'global';
var obj = {
    status: 'obj',
    getStatus: function() {
        return this.status;
    }
};
console.log(obj.getStatus());
var fun = obj.getStatus;
console.log(fun());

// 6
console.log('---6---');

function Foo() {}
// class Foo {} 只是一个语法糖，背后还是 es6
console.log(typeof Foo);

// 7
console.log('---7---');
var a = Symbol('a'); // Symbol es6 新增的一个数据类型，产生唯一值
let b = Symbol('a');
// var a = '1';
console.log(b === a);

var obj = {
    [a]: 'a value',
    b: 'b value',
    b: '123'
};
console.log(Object.keys(obj)); // 返回一个对象上面可枚举的属性
console.log(Object.getOwnPropertySymbols(obj)); // 返回一个对象上左右 Symbol 属性
console.log(a in obj);
console.log(a, obj[a]);