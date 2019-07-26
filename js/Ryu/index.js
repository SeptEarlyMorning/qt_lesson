let currentPlayer = null;
const Ryu = {
    name: 'Ryu',
    sex: '男',
    attack: function(){
        console.log(`${this.name}攻击`)
    },
    defense: function(){
        console.log(`${this.name}防御`)
    },
    jump: function(){
        console.log(`${this.name}跳跃`)
    },
    underarm: function(){
        console.log(`${this.name}蹲下`)
    }
};

const ChunLi = {
    name: '春丽',
    sex: '女',
    attack: function(){
        console.log(`${this.name}攻击`)
    },
    defense: function(){
        console.log(`${this.name}防御`)
    },
    jump: function(){
        console.log(`${this.name}跳跃`)
    },
    underarm: function(){
        console.log(`${this.name}蹲下`)
    }
};

const commands = {
    '119': 'jump', //W
    '115': 'underarm', //S
    '97': 'defense', // A
    '100': 'attack' // D
}

currentPlayer = ChunLi;
const commandStack = [];

document.onkeypress = function(ev) {
    console.log(ev.keyCode);
    // Ryu 一句代码执行
    // keyCode 对应的 动作 动起来
    // 1. 抽象 {ev.keyCode: 动作()}
    // obj[key] obj.name obj['name']
    let keyCode = ev.keyCode,
        command = commands[keyCode]?makeCommand(currentPlayer, commands[keyCode]):null;
    if (command) {
        // 谁，那个动作
        // 参数
        command();
        // Ryu[commands[ev.keyCode]]();
        commandStack.push(command);
    }
    // 具象
    // commands[ev]
    // switch (ev.keyCode) {
    //     case 119:
    //         Ryu.jump();
    //         break;
    //     case 115:
    //         Ryu.underarm();
    //         break;
    //     case 97:
    //         Ryu.defense();
    //         break;
    //     case 110:
    //         Ryu.attack();
    //         break;
    //     default:
    //         break;
    // }
};

// 
var makeCommand = function(reciver, state) {
    return function() {
        // console.log(reciver[state]);
        reciver[state]();
    }
}
replay = document.getElementById('replay').onclick = function(params) {
    let command;
    while(command = commandStack.shift()) {
        command();
    }
}