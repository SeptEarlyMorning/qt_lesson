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