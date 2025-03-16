const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute= require('./routes/product.route.js')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products",productRoute)

app.get('/',function(req, res){
    res.send('Yooo')
})

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected to database! '))
    .catch(()=>console.log('server not running'));
app.listen(3000,()=>console.log("Server is running !"))