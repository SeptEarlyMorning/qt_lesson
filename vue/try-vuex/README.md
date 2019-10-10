- vuex 数据流<br>
    组件 + 共享数据
1. 共享转态
    - this.$store<br>
        Vue.use(Vuex) Vue.$store
    - this.$store.state<br>
        new Vue({<br>
            store<br>
        })<br>
        store = new Vuex.Store({<br>
            state,<br>
            ...<br>
        })<br>

        myVuex Vue.use()<br>
        new myVuex.Store(options)<br>
        option 四大家族
    - es6 的模块化机制<br>
        export default xxx<br>
        index.js Vuex { Store, }
    - class get 方法
        Store 是一个类，四大家族是它的属性
        this.$store 对 vue.propotype 扩展后，所有的组件都可以调用
        Vue 钩子函数，beforeCreated
        除了它该做的，再做下 vuex 的初始化
        Vue.mixin({
            beforeCreated:
        })
    - 让唯一的 store 对象，state 是属性<br>
        beforeCreated vue 该怎么样，<br>
        再多 this.$store =<br> 
        this Vue 单例的根组件<br>
        beforeCreated 之前的代码也要运行，Vue.mixin({<br>
            beforeCreate: vuexInit<br>
        })<br>
        通过源码认识到所有组件都可以访问 $store，是因为它已经为 vue 单例加入了这个属性<br>
        每个组件里的 this -> 本组件 -> prototype -> vue 单例
    - this.$store.getters.xxx<br>
        跟 state 不一样的地方是方法<br>
        会返回根据 state 的新的值<br>
        Object.defineProperty(this.$store.getters, xxx, {<br>
            get() {<br>
                数据劫持<br>
                return store.options.getters[xxx];(return getterFn(store.state);)<br>
            }<br>
        })<br>
        defineProperty 是一个个属性定义<br>
        [key, fn]<br>
        forEachVal();<br>
        regiterGetter(this, key, fn);