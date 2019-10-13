const fs = require('fs'); // 文件模块
// require 模块引入机制
// IO
fs.createReadStream('./sample.txt').pipe(process.stdout); // 输出设备的一种 交互  process.stdout(管道)
