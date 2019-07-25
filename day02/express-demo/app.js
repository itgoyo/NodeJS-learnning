var express = require('express')

var app = express()

app.get('/', function (req, res) {

    res.end('hello itgoyo')

})

app.get('/json', function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end('{"resultCode":0,"resultData":{"isFirstLogin":1,"userType":"2","userName":"wujiafu","token":"5ae00462662f83bf1442d6e8a0c6c0a5"},"resultMessage":"登录成功!","resutlState":"SUCCESS"}');

})
// Express为 Response 提供了一个方法：render
//render 默认是不可以使用的，但是如果模板配置了模板引擎就可以使用了

app.engine('art', require('express-art-template'))

app.get('/404', function (req, res) {
    //render 的时候默认是要到 views 目录下面找
    res.render('404.art')

})

app.get('/admin', function (req, res) {

    res.render('admin/admin.art', {
        title: '我就是你们的标题呀'
    })

})

app.listen(3000, function () {
    console.log('server is running');

})