import Vue from 'vue'

function AVue({ methods }) {
    for (const key in methods) {
        this[key] = methods[key];
    }
}

AVue.prototype.$alert = () => {
    document.write('我是个赝品');
}

Object.defineProperty(Vue.prototype, '$alert', {
    writable: false,
    value() {
        console.log('我是干货');
    },
    set() {

    },
    get() {

    }
});
export default AVue