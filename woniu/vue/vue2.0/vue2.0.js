let oldArrayPrototype = Array.prototype;
let proto = Object.create(oldArrayPrototype);

['push', 'shift', 'pop'].forEach(method => {
    proto[method] = function() { // 函数劫持，把函数重写，内部调用的还是老方法
        updateView(); // 切片编程
        oldArrayPrototype[method].call(this, ...arguments);
    }
})

function observe(target) {
    if (typeof target !== 'object' || target == null) {
        return target;
    }

    if (Array.isArray(target)) { // 拦截数组，给数组中的方法进行重写
        target.__proto__ = proto;
        // 同 Object.setPrototypeOf(target, proto);
    }

    for (const key in target) {
        defineReactive(target, key, target[key]);
    }
}

function defineReactive(target, key, value) {
    observe(value);
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue !== value) {
                updateView();
                value = newValue;
            }
        }
    });
}

function updateView() {
    console.log('更新视图');

}

let data = {
    name: 'wn',
    age: [1, 2, 3]
}

observe(data)
data.age.push(4)

console.log(data.age);
