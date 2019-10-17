const Event = require('events');
const ev = new Event();

// 订阅
function price1() {
    console.log(`大米涨价了`);
}

function price2(thing) {
    console.log(`${thing}涨价了`);
}

ev.on('price', price1);
ev.on('price', price2);

// 发布
ev.emit('price', '大蒜');
ev.removeListener('price', price1);
ev.emit('price', '大蒜');

// once
ev.once('eat', () => {
    console.log('eat')
});

ev.emit('eat');
ev.emit('eat');