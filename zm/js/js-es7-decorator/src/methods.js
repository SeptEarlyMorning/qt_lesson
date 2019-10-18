// function Man() { }
// Man.prototype.xiangqin = function () { };
// Object.defineProperty(Man.prototype, 'xiangqin', {
//     value: function () { }
// });
function betterWn(target, name, descriptor) {
    // Man.prototype.xiangqing;
    const originalXiangqing = descriptor.value;
    descriptor.value = () => {
        console.log('我家在红谷滩有两套房');
        console.log('我家有车');
        originalXiangqing();
    }
}

class Man {

    @betterWn
    xiangqing() {
        // console.log('我家在红谷滩有两套房');
        // console.log('我家有车');
        console.log('和我走吧');
    }
}
var man = new Man();
man.xiangqing();