const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
app.use(express.json())

app.get('/',function(req, res){
    res.send('hello bitch')
})

app.post('/api/products',async(req,res)=>{
    try{
        const product = await  Product.create(req.body)
        res.status(200).json(product);
    }catch (error){
        res.status(500).json({message: error.message});
    }
})

app.get('/api/products',async (req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    }catch (error){
        res.status(500).json({message: error.message});
    }
})

app.get('/api/products/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    }catch (error){
        res.status(500).json({message: error.message});

    }
})
app.put('/api/products/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if (!product){
            return res.status(404).json({message:"Product not found"})
        }
        const updatedproduct = await Product.findById(id)

        res.status(200).json(updatedproduct)

    }catch (error){
        res.status(500).json({message: error.message});

    }
})

app.delete('/api/products/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        res.status(200).json({message:"product deleted successfully"})

    }catch (error){
        res.status(500).json({message: error.message});
    }
})
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected to database! '))
    .catch(()=>console.log('server not running'));
app.listen(3000,()=>console.log("Server is running !"))