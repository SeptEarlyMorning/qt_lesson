const koa = require('koa');
const koaRouter = require('koa-router');
const koaStatic = require('koa-static');
const path = require('path');
const app = new koa();

app.use(koaStatic(path.join(__dirname, './static')));
var router = new koaRouter();
app.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'); // 请求方法
    ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type'); // 请求头
    ctx.set('Access-Control-Allow-Credentials', true); // 是否允许发送 cookic ...凭证
    await next();
})
router.post('/api/books', (ctx, next) => {
    // ctx.router available
    console.log(ctx.cookies.get('hello'));

    ctx.body = [
        { bookName: 'php 入门到精通' },
        { bookName: 'node' }
    ];
});

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3001, () => {
    console.log('server is running http://localhost:3001');

});