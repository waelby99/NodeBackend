const express = require('express')
const app = express()

app.get('/',function(req, res){
    res.send('hello bitch')
})

app.listen(3000,()=>console.log("Server is running !"))