// var https = require('https') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
// var url = 'https://www.jianshu.com/p/8aa586d1c74d' //输入任何网址都可以

// https.get(url,function(res){  //发送get请求
//   var html=''
//   res.on('data',function(data){
//     html += data  //字符串的拼接
//   })
//   res.on('end',function(){
//     console.log(html)
//     })
// }).on('error',function(){
//   console.log('获取资源出错！')
// })

// const express = require('express');// 声明express模块
// const app = express();
// const superagent = require('superagent');
// const cheerio = require('cheerio');
// // ...

// let server = app.listen(3000, function () {
//   let host = server.address().address;
//   let port = server.address().port;
//   console.log('Your App is running at http://%s:%s', host, port);

// });
// let hotNews = [];                                // 热点新闻
// let localNews = [];
// // 本地新闻
// app.get('/', function (req, res) { // 获取请求数据路径
//   superagent.get('https://nc.meituan.com/').end((err, data) => {
//     if (err) {
//       // 如果访问失败或者出错，会这行这里
//       console.log(`热点新闻抓取失败 - ${err}`)
//     } else {
//       // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
//       // 抓取热点新闻数据
//       hotNews = getHotNews(data)
//       // console.log(data)
//       res.send(hotNews);
//     }
//   });


// });
// app.get('/userlist', function (req, res) {

//   console.log("userlist")
//   superagent.get('https://nc.meituan.com/').end((err, data) => {
//     if (err) {
//       // 如果访问失败或者出错，会这行这里
//       console.log(`热点新闻抓取失败 - ${err}`)
//     } else {
//       // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
//       // 抓取热点新闻数据
//       hotNews = getHotNews(data)

//       res.send(hotNews);
//     }
//   });


// });
// let getHotNews = (res) => {
//   let hotNews = [];
//   // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。

//   /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
//      以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
//    */
//   let $ = cheerio.load(res.text);

//   // 找到目标数据所在的页面元素，获取数据
//   $('div.quality-area a div img').each((idx, ele) => {
//     // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
//     // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
//     let news = {
//       title: $(ele).text(),        // 获取新闻标题
//       href: $(ele).attr('href')    // 获取新闻网页链接
//     };
//     hotNews.push(news)              // 存入最终结果数组
//   });
//   return hotNews
// };

const fs = require('fs');
const url = require('url');
const gbk = require('gbk');
let index = 0;

getUrl('http://localhost:3000/getJson', (data, str) => {
  let html = gbk.toString('utf-8', data);
  // console.log(html);
  // console.log(str);
  console.log(str);
  
  fs.writeFile('meituan.json', data, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
});

function getUrl(sUrl, success) {
  index++;
  let urlObj = url.parse(sUrl);
  const http = urlObj.protocol === 'http:' ? require('http') : require('https');
  // var http = '';
  // if (urlObj.protocol == 'http:') {
  //   http = require('http');
  // } else {
  //   http = require('https');
  // }

  console.log(urlObj);
  
  let req = http.request({
    hostname: urlObj.hostname,
    path: urlObj.path,
    port: urlObj.port,
    headers: {
    //   // 'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36',

    //   // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    //   // 'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
    //   // 'Host': 'nc.meituan.com',
    //   // 'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
    //   // 'Cache-Control': 'max-age=0',
    //   // 'Connection': 'keep-alive'
      // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      // 'Accept-Encoding': '*',
      // 'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.6',
      // 'Cache-Control': 'max-age=0',
      // 'Connection': 'keep-alive',
      // 'Cookie': '_lxsdk_cuid=16dc3c8f313c8-06af8beee79231-67e1b3f-100200-16dc3c8f3142c; iuuid=0460C964F6F85BA6AE23B8AE1854877C0FF3280F64B67CF759C2153B9494970E; cityname=%E5%8D%97%E6%98%8C; _lxsdk=0460C964F6F85BA6AE23B8AE1854877C0FF3280F64B67CF759C2153B9494970E; webp=1; _ga=GA1.2.1993158739.1571832951; __utmz=74597006.1571901493.2.2.utmcsr=nc.meituan.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _hc.v=c0e7f74a-7ca7-a4d6-186f-990364048009.1574575835; mtcdn=K; uuid=3b383aa707d24f148eb7.1574681888.1.0.0; _lx_utm=utm_source%3DBaidu%26utm_medium%3Dorganic; client-id=0d298baa-73b1-4602-b332-61341c3fd0df; ci=83; rvct=83%2C787; IJSESSIONID=mdaodofbdwlv1prtksbntq13t; __utma=74597006.1993158739.1571832951.1571901493.1574852965.3; __utmc=74597006; ci3=1; i_extend=H__a100001__b3; latlng=28.734015,115.811553,1574852967300; _gid=GA1.2.1355470689.1574855149; lat=28.669667; lng=115.909385; _lxsdk_s=16eacf7928c-1e7-f64-6f6%7C%7C1',
      // 'Host': 'nc.meituan.com',
      // 'Sec-Fetch-Mode': 'navigate',
      // 'Sec-Fetch-Site': 'none',
      // 'Sec-Fetch-User': '?1',
      // 'Upgrade-Insecure-Requests': '1',
      // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
    }
  }, res => {
    console.log(res.statusCode);
    if (res.statusCode == 200) {
      const arr = [];
      let str = '';
      res.on('data', buffer => {
        arr.push(buffer);
        str += buffer
      });
      res.on('end', () => {
        let b = Buffer.concat(arr);
        console.log(b);
        
        success && success(b, str);
      })
    } else if (res.statusCode == 302 || res.statusCode == 301) {
      console.log(`${index}: ${res.headers.location}`);

      console.log(res.statusCode, res.headers);
      getUrl(res.headers.location, success);
    } else {
      console.log(res.statusCode);

    }

  });

  req.end();
  req.on('error', () => {
    console.log('404');
  })
}

// let req = https.request({
//   'hostname': 'nc.meituan.com',
//   'path': ''
// }, res => {
//   // console.log(res);
//   const arr = [];
//   let str = '';
//   res.on('data', buffer => {
//     arr.push(buffer);
//     str += buffer;
//   });
//   res.on('end', () => {
//     console.log(str);
//   })
// });

// req.end();