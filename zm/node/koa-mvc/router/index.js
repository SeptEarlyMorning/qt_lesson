const KoaRouter = require('koa-router');
const loginController = require('../controller/login.js');
const registerController = require('../controller/register.js');
const router = new KoaRouter();

router.prefix('/api/v1');
router.post('/login', async(ctx) => {
    ctx.body = '123456';
});
router.post('/login', loginController);
router.get('/register', registerController); //将请求发给controller管理

module.exports = router;