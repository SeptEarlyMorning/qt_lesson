const userModel = require('../model/user-info.js');
const register = async(ctx) => {
    console.log('注册   controller/register.js');
    // register?user=123&password=456
    const user = ctx.query;
    console.log('register  ', user);
    // 插入数据库
    let insertRes = await userModel.insertData(user); //交给model中的insertData方法去处理
    console.log('插入数据库的结果 ', insertRes);
    ctx.body = insertRes;
};

module.exports = register;