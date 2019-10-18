function who(target) {
    return function(params) {
        console.log(target);
        target.name1 = '蜗牛';
        return target;
    }
}

@who
// @who('蜗牛')
// @who({
//     name: '蜗牛'
// })
class Man {
    xiangqin() {
        console.log(`${Man.name1}去相亲了`);
    }
}

var man = new Man();
man.xiangqin();

class Man1 {
    xiangqin() {
        console.log('蜗牛弟弟去相亲了');
    }
}