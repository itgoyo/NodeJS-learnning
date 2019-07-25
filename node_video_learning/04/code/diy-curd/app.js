// var http = require('http')
var express = require('express');
const app = express();

const router = require('./router')
var bodyParser = require('body-parser')

app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));


app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
app.use(router);

app.listen(8888, function () {
    console.log('diy-crud app is running');
})

module.express = app;