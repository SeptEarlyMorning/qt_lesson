## emmet 快捷输入
vscode 来自微软,內置了emmet插件
- 使用了CSS选择器来快速语法
    1. 类名选择器 .className
    2. > 父子选择器
    3. + 兄弟选择器
    4. [] 属性选择器
    .starwars-demo>img.star*2[src="./images/.svg"]

- 定位
    CSS 布局的一种
    position: absolute;
    position: relative; body 是最顶层的相对定位
    父级或一直往外查找，如果有定位元素，相对最近的长辈元素定位，否则就是body

- transform
    变形属性 translate 移动|scale 缩放|rotate 旋转
    三维世界 perspective 视点与屏幕的距离
    transform-style: preserve-3d;

- npm node的工具包管理
    live-server 静态网页提供了web-server 热更新
    安装命令 npm install -g live-server
    js 的命令行工具 运行在服务器端
    