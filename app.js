var myLogTest = require('./module/Log.js')
var http = require('http')
var server = http.createServer(function (req,res) {
    if (req.url == '/hellow') {
        myLogTest.hellow(res)
    }
})
server.listen(8080)
console.log('server success')
