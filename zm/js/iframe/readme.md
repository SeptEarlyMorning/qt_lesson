## 代理
    线上环境解决跨域：代理
    生活中：中介

    工具：webpack live-servers / nginx
    代理层面：fe -> /api/post[node server] -> /api/post[java server]

以上都是方向代理：代理客户端
10 1中介 1房东
正向代理：代理服务器
1 中介 10房东

一个域下面 ajax 请求有并发限制
提交数据给服务器的时候 ajax 一般用来处理业务接口
日志提交，考虑到 ajax 并发限制属于非核心业务采用 img 的方式提交数据
<!-- https://web.u51.com/api.u51.com/nodejs-performance-log-server/t.png?_u=https%3A%2F%2Fwww.u51.com%2F&_o=&_v=0.2.24&dns=0&ntw=46&dlt=926&dct=2341&tlt=2342&spt=906&kmdNetwork=&kmdOs=&kmdHasBg=false -->
