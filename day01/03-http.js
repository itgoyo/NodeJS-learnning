var http = require('http')

var server = http.createServer();

server.on('request', function (params) {
    console.log("客户端监听");

})

server.listen(3000, function () {

    console.log("服务器启动成功");


})