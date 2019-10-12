- 链接带来了页面的互联
    一切皆资源 链接表示 URL 重新刷新导致体验有点差
## 路由的做法 vue-router 会用不算什么 框架的实现
1. 单页应用的结构
    不在是 n 个页面，1个页面，分为不动的部分和动的部分<br>
    导航 nav a #/page1<br>
    /page1 path 页面切换<br>
    \#/page1 path 页面切换的 锚链接<br>
    URL 改变了的事件，container 元素里 DOM<br>
    大型页面，方便跳转<br>
    锚链接让点击链接，不跳转页面成为可能 #/page1 #开头

    路由接管一切 new HashRouter();
    constructor 订阅 hashChange 事件

- 新的前端世界在打开，要有新的秩序
    管住所有路由 #/page hashRouter<br>
    hash => cb() // container 显示;<br>
    class HashRouter<br>
    this.routers = {}<br>
    向外提供 register(hash, callback = function() {}) 方法<br>
    window.addEventListener('haschange', this.load.bind(this))<br>
    call,apply, es5 里面手动执行函数内部 this 的 API<br>
    bind this 一样，返回一个新的函数，适合事件执行时