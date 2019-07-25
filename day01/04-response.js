var http = require('http')

var server = http.createServer();

http.createServer();


server.on('request', function (request, response) {
    // console.log("客户端监听");
    // console.log('请求路径' + request.url);
    // console.log(response.toString);

    // response.write('hello')
    // response.write('itgoyo')
    // response.end()

    response.write('数据响应：')

    if (request.url == '/') {

        response.end('首页')
    } else if (request.url == '/login') {

        response.end('login')
    } else if (request.url == '/data') {

        var datas = [{
            'name': "apple",
            'peice': '4444'
        }, {
            'name': "华为",
            'peice': '9999'
        }, {
            'name': "小米",
            'peice': '1111'
        }];

        response.end(JSON.stringify(datas))
    } else {

        response.end('no datas')
    }


})

server.listen(3000, function () {

    console.log("服务器启动成功");


})