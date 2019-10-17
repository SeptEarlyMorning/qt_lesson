const Event = require('events'),
    request = require('request'),
    inquirer = require('inquirer'),
    fs = require('fs'),
    ev = new Event();

ev.on('choose', function(songs, keyWords) {
    // 命令行交互
    inquirer.prompt([{
        type: 'list',
        name: 'song',
        message: `共${songs.length}首，回车选择播放`,
        choices: songs.map((s, i) => {
            return `${i}:${s.name}`;
        })
    }]).then(choice => {
        const { song } = choice;
        const index = parseInt(song.split(':' [0]));
        const selected = songs[index];
        const { id } = selected;
        request({
            url: `http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`,
            json: true
        }, (err, res, body) => {
            // console.log(body);
            const { url } = body.data[0];
            if (!url) {
                console.log('没有找到歌曲');
                return;
            }
            request(url).pipe(fs.createWriteStream(`${decodeURIComponent(keyWords)}.mp3`));
        });
    });
});
ev.on('search', function(keyWords) {
    // 请求 搜索结果 下一步 选择
    keyWords = encodeURIComponent(keyWords);
    request({
        url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${keyWords}`,
        json: true
    }, (err, res, body) => {
        console.log('请求消息', err);
        // console.log(body);
        if (body.result && body.result.songs) {
            ev.emit('choose', body.result.songs, keyWords);
        } else {
            console.log(`没有${keyWords}的信息`);
        }
    });
});

function main() {
    const argv = process.argv.slice(2);
    // console.log(argv[0]);
    const keyWords = argv[0];

    // 搜索 选择 播放
    ev.emit('search', keyWords);
}

main();