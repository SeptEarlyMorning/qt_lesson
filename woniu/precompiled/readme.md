## 预编译四部曲
发生在函数执行之前
1. 创建 AO 对象
2. 找形参和变量声明，将变量声明和形参变成 AO 属性名，值为 undefined
3. 将实参值和形参值统一
4. 在函数体力找函数声明，将函数声明作为 AO 对象属性名，值赋予函数体

## 步骤
1.  AO {
        a: undefinded,
        b: undefinded
    }
2.  AO {
        a: 1,
        b: undefinded
    }
3.  AO {
        a: function a() {},
        b: undefinded,
        d: function d() {}
    }
4.  AO {
        a: 123,
        b: undefinded,
        d: function d() {}
    }
5.  AO {
        a: 123,
        b: undefinded,
        d: function d() {}
    }