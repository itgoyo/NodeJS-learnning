const fs = require('fs');
var baseUrl = './db.json'

exports.find = function (callback) {
    fs.readFile(baseUrl, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        callback(null, JSON.parse(data).students)
    })
}