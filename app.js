let express = require('express');
let app = express()
var port = "8080"

app.get('/hellow',(req,res)=>{
    var msg = "Welcome Nodejs Server"
    res.send(`<html><body>${msg}</body></html>`);
})
app.listen(port,()=>{
    console.log(`app start on port:${port}`)
})

