const fs = require('fs');
const url = require('url');
// const gbk = require('gbk');
let index = 0;

// getUrl('https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=83&limit=12');

function getUrl(saveRoute, sUrl, success = data => {
    fs.writeFile(saveRoute, data, function (err) {
        if (err) throw err;
        console.log(saveRoute,'It\'s saved!');
    });
}) {
    index++;
    let urlObj = url.parse(sUrl);
    const http = urlObj.protocol === 'http:' ? require('http') : require('https');
    // const http = require('http');
    let req = http.request({
        hostname: urlObj.hostname,
        path: urlObj.path,
        headers: {
            Cookie: 'uuid=7b6c14c9ba564d4cbef6.1575024616.1.0.0'
        }
    }, res => {
        // console.log(urlObj.hostname,urlObj.path);
        console.log(res.statusCode);
        if (res.statusCode == 200) {
            const arr = [];
            // let str = ''
            res.on('data', buffer => {
                arr.push(buffer);
                // str += buffer;
            });
            res.on('end', () => {
                let b = Buffer.concat(arr);
                // console.log(str);
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