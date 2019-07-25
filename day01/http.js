var http = require('http')
http.createServer(function (request, response) {

    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    response.end('{"resultCode":0,"resultData":{"isFirstLogin":1,"userType":"2","userName":"wujiafu","token":"5ae00462662f83bf1442d6e8a0c6c0a5"},"resultMessage":"登录成功!","resutlState":"SUCCESS"}');

}).listen(8888);

console.log('Server running');