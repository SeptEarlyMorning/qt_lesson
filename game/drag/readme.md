- 命名空间 name space
    Phaser { }
    1. 声明领地
    取名字 var MIUI = {}
    MIUI.version = '10.1';
    MIUI.openSystem = function() {}
    游戏框架 最小化入侵我们的 window
    污染
    2. var Phaser = {} 挂载在 window  作用域 scope
    window =>
    3. es5 类的构造 function() {}
    函数名首字母大写认为是类 构造函数
    方法 Phaser.Game.prototype.getName