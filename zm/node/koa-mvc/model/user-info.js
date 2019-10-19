const md5 = require('md5');
const query = require('../util/index.js');
// 注册
const insertData = function(val) {
    // console.log('hh')
    console.log('insertData   ', val);
    // 数据库相关  mysql第三方语法
    let sql = 'insert into user_info(name, password) value (?, ?)';
    // md5  哈希，长度固定，同样的输入，同样的输出
    return query(sql, [val.name, md5(val.password)]);
};
const queryByName = async(name) => {
    let sql = 'select * from user_info where name = ?';
    return query(sql, [name]);
};
module.exports = {
    insertData,
    queryByName
}