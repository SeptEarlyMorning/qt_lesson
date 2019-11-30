// import axios from 'axios';
// import qs from 'qs';

// axios.defaults.timeout = 5000;                        //响应时间
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
// axios.defaults.baseURL = 'https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=83&limit=12';   //配置接口地址

// //POST传参序列化(添加请求拦截器)
// axios.interceptors.request.use((config) => {
//     //在发送请求之前做某件事
//     if (config.method === 'post') {
//         config.data = qs.stringify(config.data);
//         config.headers = {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         };
//     }
//     return config;
// }, (error) => {
//     console.log('错误的传参')
//     return Promise.reject(error);
// });

// //返回状态判断(添加响应拦截器)
// axios.interceptors.response.use((res) => {
//     //对响应数据做些事
//     if (!res.data.success) {
//         return Promise.resolve(res);
//     }
//     return res;
// }, (error) => {
//     console.log('网络异常')
//     return Promise.reject(error);
// });

// //返回一个Promise(发送post请求)
// export function fetchPost(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, params)
//             .then(response => {
//                 resolve(response);
//             }, err => {
//                 reject(err);
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
// ////返回一个Promise(发送get请求)
// export function fetchGet(url, param) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, { params: param })
//             .then(response => {
//                 resolve(response)
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
// export default {
//     fetchPost,
//     fetchGet,
// }

// // 配置API接口地址
// var root = 'https://nc.meituan.com/ptapi/getScenesList'
// // 引用axios
// // var axios = require('axios')
// import axios from 'axios';
// // 自定义判断元素类型JS
// function toType (obj) {
//     return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// }
// // 参数过滤函数
// function filterNull (o) {
//     for (var key in o) {
//         if (o[key] === null) {
//             delete o[key]
//         }
//         if (toType(o[key]) === 'string') {
//             o[key] = o[key].trim()
//         } else if (toType(o[key]) === 'object') {
//             o[key] = filterNull(o[key])
//         } else if (toType(o[key]) === 'array') {
//             o[key] = filterNull(o[key])
//         }
//     }
//     return o
// }
 
// /*
//   接口处理函数
//   这个函数每个项目都是不一样的，我现在调整的是适用于
//   https://cnodejs.org/api/v1 的接口，如果是其他接口
//   需要根据接口的参数进行调整。参考说明文档地址：
//   https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
//   主要是，不同的接口的成功标识和失败提示是不一致的。
//   另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
// */
// function apiAxios (method, url, params, success, failure) {
//     if (params) {
//         params = filterNull(params)
//     }
//     axios({
//         method: method,
//         url: url,
//         data: method === 'POST' || method === 'PUT' ? params : null,
//         params: method === 'GET' || method === 'DELETE' ? params : null,
//         baseURL: root,
//         withCredentials: false
//     })
//     .then(function (res) {
//     if (res.data.success === true) {
//         if (success) {
//             success(res.data)
//         }
//     } else {
//         if (failure) {
//             failure(res.data)
//         } else {
//             window.alert('error: ' + JSON.stringify(res.data))
//         }
//     }
//     })
//     .catch(function (err) {
//         let res = err.response
//         if (err) {
//             window.alert('api error, HTTP CODE: ' + res.status)
//         }
//     })
// }
 
// // 返回在vue模板中的调用接口
// export default {
//     get: function (url, params, success, failure) {
//         return apiAxios('GET', url, params, success, failure)
//     },
//     post: function (url, params, success, failure) {
//         return apiAxios('POST', url, params, success, failure)
//     },
//     put: function (url, params, success, failure) {
//         return apiAxios('PUT', url, params, success, failure)
//     },
//     delete: function (url, params, success, failure) {
//         return apiAxios('DELETE', url, params, success, failure)
//     }
// }

// import axios from 'axios';

// let http = axios.create({
//   baseURL: 'https://nc.meituan.com/ptapi/getScenesList',
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//   },
//   transformRequest: [function (data) {
//     let newData = '';
//     for (let k in data) {
//       if (data.hasOwnProperty(k) === true) {
//         newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
//       }
//     }
//     return newData;
//   }]
// });

// function apiAxios(method, url, params, response) {
//   http({
//     method: method,
//     url: url,
//     data: method === 'POST' || method === 'PUT' ? params : null,
//     params: method === 'GET' || method === 'DELETE' ? params : null,
//   }).then(function (res) {
//     response(res);
//   }).catch(function (err) {
//     response(err);
//   })
// }

// export default {
//   get: function (url, params, response) {
//     return apiAxios('GET', url, params, response)
//   },
//   post: function (url, params, response) {
//     return apiAxios('POST', url, params, response)
//   },
//   put: function (url, params, response) {
//     return apiAxios('PUT', url, params, response)
//   },
//   delete: function (url, params, response) {
//     return apiAxios('DELETE', url, params, response)
//   }
// }

const fs = require('fs');
const url = require('url');
// const gbk = require('gbk');
let index = 0;

// getUrl('https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=83&limit=12');

function getUrl(sUrl, success = data => {
    fs.writeFile('meituan.json', data, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
}) {
    index++;
    let urlObj = url.parse(sUrl);
    const http = urlObj.protocol === 'http:' ? require('http') : require('https');
    let req = http.request({
        hostname: urlObj.hostname,
        path: urlObj.path
    }, res => {
        console.log(res.statusCode);
        if (res.statusCode == 200) {
            const arr = [];
            res.on('data', buffer => {
                arr.push(buffer);
            });
            res.on('end', () => {
                let b = Buffer.concat(arr);
                success && success(b);
            })
        } else if (res.statusCode == 302 || res.statusCode == 301) {
            console.log(`${index}: ${res.headers.location}`);
            getUrl(res.headers.location, success);
        }
    });

    req.end();
    req.on('error', () => {
        console.log('404');
    })
}

module.exports = getUrl;