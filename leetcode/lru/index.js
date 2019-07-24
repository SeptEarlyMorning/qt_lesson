/**
 * 最近最少使用原则
 * @param {number} capacity 容器
 */
var LRUCache = function(capacity) {
    this.buffer = [];
    this.capacity = capacity;
    // buffer.length = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.find = function(key) {
    let i = this.buffer.length;
    while (i) {
        i--;
        if (this.buffer[i].key == key) {
            return i;
        }
    }
    return -1;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    var i = this.find(key);
    if (i != -1) {
        var value = this.buffer[i].value;
        this.buffer.push({key, value});
        this.buffer.splice(i, 1);
        return value;
    }
    return i;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
    // for (let i = 0; i < this.buffer.length; i++) {
    //     if (this.buffer[i].key == key) {
    //         this.buffer.splice(i, 1);
    //         this.buffer.push({key, value});
    //         return;
    //     }
    // }
    var i = this.find(key)
    if (i != -1) {
        this.buffer.splice(i, 1);
    } else {
        if (this.capacity <= this.buffer.length) {
            this.buffer.shift();
        }
    }
    this.buffer.push({key,value});
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var lruCache = new LRUCache(2);
console.log(lruCache.get(2));
console.log(lruCache.buffer);
lruCache.put(2, 6);
console.log(lruCache.buffer);
console.log(lruCache.get(1));
console.log(lruCache.buffer);
lruCache.put(1, 5);
console.log(lruCache.buffer);
lruCache.put(1, 2);
console.log(lruCache.buffer);
console.log(lruCache.get(1));
console.log(lruCache.buffer);
console.log(lruCache.get(2));
console.log(lruCache.buffer);