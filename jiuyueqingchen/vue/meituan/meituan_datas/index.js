const Koa = require('koa');
const KoaRouter = require('koa-router');
// const koaStatic = require('koa-static');
const KoaCors = require('koa-cors');
// const path = require('path');
const fs = require('fs');
// const meituan = require('./meituan');

const app = new Koa();
const router = new KoaRouter();

app.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'); // 请求方法
    ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type'); // 请求头
    ctx.set('Access-Control-Allow-Credentials', true); // 是否允许发送 cookic ...凭证
    await next();
})

router.post('/getJson', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./meituan.json'));
});

router.get('/getJson', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./meituan.json'));
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
});


// server.on('request', (req, res) => {
//     let url = req.url;
//     if (url === '/meituan') {
//         fs.readFile('./meituan.json', (error, data) => {
//             if (error) {
//                 console.log('不存在');

//             } else {
//                 res.setHeader('Content-Type', 'text/html;charset=utf-8');
//                 res.end(data);
//             }
//         });
//         // res.end(meituan);
//         console.log('-------');
//     }
//     // res.end();
// });

// server.listen(3001, () => {
//     console.log('启动');

// })