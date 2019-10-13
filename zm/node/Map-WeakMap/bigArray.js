let array = new Array(5 * 1024 * 1024);
console.log(process.memoryUsage());
array = null;
global.gc();
console.log(process.memoryUsage());