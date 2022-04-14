let express = require('express')
let http = require('http')
let app = express()
app.get('/hellow',function (req,res) {
    res.send("<html><body>Hellow World</body></html>");
})
app.listen(8080)
console.log("success")