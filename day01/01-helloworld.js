var str = "itgoyo"

console.log(str);

// node 文件名字 即可执行，不用借助于浏览器，注意文件名不能使用`node.js`来命名

//浏览器中的 javascript 是没有文件操作能力的
//nodejs 有文件操作能力

var fs = require('fs')

fs.readFile('hello.txt', function (error,
    data) {
    console.log(data.toString);

})