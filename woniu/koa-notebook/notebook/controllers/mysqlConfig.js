const config = require('./defaultConfig')
const mysql = require('mysql')

// 创建线程连接池
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})

// 统一连接数据库的方法
let allServices = {
    query: function(sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject()
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release() //释放连接
                    })
                }
            })
        })
    }
};

// 读取所有users表数据, 测试数据库连接
let getAllUsers = function() {
    let _sql = 'select * from users';
    return allServices.query(_sql);
};
// 注册用户
let insertUser = function(value) {
    let _sql = `insert into users set username=?,userpwd=?,nickname=?;`;
    return allServies.query(_sql, value);
};

// 查找用户的方法
let findUser = function(username) {
    let _sql = `select * from users where username='${username}'`;
    return allServices.query(_sql, username);
};
// 用户登录
let userLogin = function(username, userpwd) {
    let _sql = `select * from users where username='${username}' and userpwd='${userpwd}'`;
    return allServices.query(_sql, username, userpwd);
};
module.exports = {
    getAllUsers,
    insertUser,
    findUser,
    userLogin
};