var http = require('http')
var log = {
    hellow:function (res) {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<html><body>Hellow World</body></html>")
        res.end
    }
}

module.exports = log