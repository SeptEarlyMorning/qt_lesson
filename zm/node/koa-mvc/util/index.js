const mysql = require('mysql');

const pool = mysql.createPool({
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'chat'
});
let query = function(sql, value) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connect) => {
            if (err) {
                reject(err);
            }
            connect.query(sql, value, (err, rose) => {
                if (err) {
                    // console.log(err)
                    reject;
                } else resolve(rose);
                // console.log(err)
                connect.release(); //释放数据库连接
            })
        })
    })
}

module.exports = query;