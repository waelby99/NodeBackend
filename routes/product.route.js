const express = require('express')
const router = express.Router()
const Product = require('../models/product.model.js')

const productController = require('../controllers/product.controller.js')
const {getProducts,getProductById,addProduct,updateProduct,deleteProduct} = require("../controllers/product.controller");


router.get('/',getProducts);
router.get('/:id',getProductById);
router.post('/',addProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);



module.exports = router;