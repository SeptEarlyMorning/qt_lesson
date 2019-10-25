## xss
(cross site script) 跨站脚本攻击
用不合法途径，往 web 页面插入可执行的代码
攻击类型：
1. 反射型：
xss 代码存在 url 中，服务器解析请求，把 xss 的代码一并返回，web 页面得到响应，执行 xss 代码，过程像一次反射一样
2. 存储型：
唯一区别：xss 的代码有没有永久保留在服务器（数据库、文件···）中

## 防护
编码 html entity 编码，'<' -> '\&lt;' ' ' -> '\&nbsp;'
\<script>alert(1)\</script>
onError 属性 onClick \<script>xxx\</script>
过滤
校正