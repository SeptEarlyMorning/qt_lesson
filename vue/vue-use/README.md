- VUE<br>
    VueRouter 路由<br>
    Vuex 数据流<br>
    Element pc<br>
    MintUI/IVIEW mobile<br>
    
    插件<br>
    Vue 瘦身 MVVM<br>
    其他的都是周边生态<br>
    插件机制往里面加<br>
    Vue.use(plugin)<br>
    plugin 按一定的规则
    this.$route<br>
    Vue.prototypr

- ElementUI 有两种引入组件的方式<br>
    \<el-button /><br>
    (Vue.component.name, component);
    const components = []<br>
    components.forEach((component) => { Vue.component(component.name, component); })

- 写一个 Vue 的组件，开源的插件 100+<br>
    {<br>
        install: function() {<br>
            Vue.component(component.name, component);<br>
            Vue.propotype.$message = Message;<br>
        }<br>
    }<br>