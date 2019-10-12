class HashRouter {
    constructor() {
        // key(/page1) => val(func 由外界传进来)
        this.routers = {};
        window.addEventListener('hashchange', this.load.bind(this))
    }

    register(hash, callback = function() {}) {
        this.routers[hash] = callback;
    }

    registerNoFound(callback = function() {}) {
        this.routers['404'] = callback;
    }

    registerError(callback = function() {}) {
        this.routers['error'] = callback;
    }

    load() {
        // console.log(this);
        let hash = location.hash.slice(1),
            handler; // 处理函数
        // container 显示相应的 page 内容
        // 由外界决定
        handler = this.routers[hash];
        // 仅限于对象自身的属性，而不去查找原型链上的属性
        if (!this.routers.hasOwnProperty(hash)) {
            handler = this.routers['404'];
        }
        try {
            handler.apply(this);
        } catch (e) {
            console.error(e);
            (this.routers['error'] || function() {}).call(this, e);
        }
    }
}