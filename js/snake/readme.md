- canvas
- JS 异步是核心问题
    事件，定时器，fetch/ajax
    代码的编写顺序和执行顺序不一样，代码的可读性下降
    loadAssets(); 1秒 等待一下呢？
    hideWelcome(); 在他之后
    js 先 hideWelcome() 在 loadAssets 执行完成
    js 单线程语言 Java 多线程
    在一次执行中 会把立即执行的代码执行掉，再把事件监听、定时器、Ajax 事件轮询中
    怎么办？ 花时间？
    回调
- img.onload
    window.onload 开始我们的表演 太慢了
    有没有比这个早一点发生，但是 html，css 已经O了
    如果 html css js 都没有基本机构的搭建完成，游戏脚本会有问题
- 函数式编程
    写代码？完成开发需求 负杂 <= 独立的多个子需求来完成 <= 单独封装成一个函数
    init();
    drawSnake();
    addEvent();
    refreshSnake();
    winOrLoose();
    showResult();
