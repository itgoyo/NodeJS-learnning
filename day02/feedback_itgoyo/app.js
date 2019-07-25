var express = require('express')

var app = express()

app.engine('html', require('express-art-template'))

const port = 3000;

var comments = [{
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

app.get('/', function (req, res) {

    res.render('index.html', {
        comments: comments
    })

})

app.listen(port, function () {
    console.log("app running port is 3000");

})