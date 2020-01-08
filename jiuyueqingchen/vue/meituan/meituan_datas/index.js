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

router.post('/quality/all', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/all.json'));
});

router.get('/quality/all', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/all.json'));
});

router.post('/quality/feast', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/feast.json'));
});

router.get('/quality/feast', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/feast.json'));
});

router.post('/quality/journey', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/journey.json'));
});

router.get('/quality/journey', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/journey.json'));
});

router.post('/quality/show', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/show.json'));
});

router.get('/quality/show', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/show.json'));
});

router.post('/quality/spa', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/spa.json'));
});

router.get('/quality/spa', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/quality/spa.json'));
});

router.post('/cheap/all', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/cheap/all.json'));
});

router.get('/cheap/all', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/cheap/all.json'));
});

router.post('/cheap/food', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/cheap/food.json'));
});

router.get('/cheap/food', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/cheap/food.json'));
});

router.post('/cheap/xiuyu', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/cheap/xiuyu.json'));
});

router.get('/cheap/xiuyu', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/cheap/xiuyu.json'));
});

router.post('/films/coming', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/films/coming.json'));
});

router.get('/films/coming', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/films/coming.json'));
});

router.post('/films/hot', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/films/hot.json'));
});

router.get('/films/hot', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/films/hot.json'));
});

router.post('/citys/citys', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/citys.json'));
});

router.get('/citys/citys', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/citys.json'));
});

router.post('/citys/320100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/320100.json'));
});

router.get('/citys/320100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/320100.json'));
});

router.post('/citys/330100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/330100.json'));
});

router.get('/citys/330100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/330100.json'));
});

router.post('/citys/340100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/340100.json'));
});

router.get('/citys/340100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/340100.json'));
});

router.post('/citys/341000', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/341000.json'));
});

router.get('/citys/341000', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/341000.json'));
});

router.post('/citys/350100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/350100.json'));
});

router.get('/citys/350100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/350100.json'));
});

router.post('/citys/350500', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/350500.json'));
});

router.get('/citys/350500', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/350500.json'));
});

router.post('/citys/350600', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/350600.json'));
});

router.get('/citys/350600', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/350600.json'));
});

router.post('/citys/420100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/420100.json'));
});

router.get('/citys/420100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/420100.json'));
});

router.post('/citys/420500', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/420500.json'));
});

router.get('/citys/420500', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/420500.json'));
});

router.post('/citys/430100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/430100.json'));
});

router.get('/citys/430100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/430100.json'));
});

router.post('/citys/120100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/120100.json'));
});

router.get('/citys/120100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/120100.json'));
});

router.post('/citys/370100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/370100.json'));
});

router.get('/citys/370100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/370100.json'));
});

router.post('/citys/210200', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/210200.json'));
});

router.get('/citys/210200', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/210200.json'));
});

router.post('/citys/140100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/140100.json'));
});

router.get('/citys/140100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/140100.json'));
});

router.post('/citys/130100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/130100.json'));
});

router.get('/citys/130100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/130100.json'));
});

router.post('/citys/130300', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/130300.json'));
});

router.get('/citys/130300', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/130300.json'));
});

router.post('/citys/150100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/150100.json'));
});

router.get('/citys/150100', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/150100.json'));
});

router.post('/citys/370700', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/370700.json'));
});

router.get('/citys/370700', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/370700.json'));
});

router.post('/citys/130200', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/130200.json'));
});

router.get('/citys/130200', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/130200.json'));
});

router.post('/citys/370900', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/370900.json'));
});

router.get('/citys/370900', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/citys/370900.json'));
});

router.post('/recommends/recommends', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/recommends/recommends.json'));
});

router.get('/recommends/recommends', ctx => {
    // await KoaCors();
    ctx.body = JSON.parse(fs.readFileSync('./datas/recommends/recommends.json'));
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