const fs = require('fs');
var Students = require('./students')
// 引入 express
var express = require('express');

//创建一个 router 容器
var router = express.Router();

router.get('/students', function (req, res) {
    Students.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.render('index.html', {
            fruits: [],
            students: students
        })
    });
});





//导出 router 容器
module.exports = router;