// let a = 'wn';
// let b = a;
// console.log(b);

// a = '蜗牛';
// console.log(a);
// console.log(b);

// let a = {
//     name: 'wn',
//     book: {
//         title: "You don't konw JS",
//         price: '45'
//     }
// }

// let b = a;
// a.name = 'ning'
// a.book.price = '55'
// console.log(b);

// let a = {
//     name: 'wn',
//     book: {
//         title: "You don't konw JS",
//         price: '45'
//     }
// }
// // let b = Object.assign({}, a);
// let b = {...a};
// console.log(b);

// a.name = 'ning';
// a.book.price = '55';
// console.log(a);
// console.log(b);

// let a = [0, '1', [2, 3]];
// let b = a.slice(1);

// console.log(b);

// a[1] = '22'
// a[2][0] = 4;
// b[1][0] = 9;

// console.log(a);
// console.log(b);

let a = [0, 1, 2];
let b = a;

a[0] = 1;
b[1] = 0;

console.log(a);
console.log(b);