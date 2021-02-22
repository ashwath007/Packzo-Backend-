const express = require('express');
const { createProduct } = require('../controllers/product');
const router = express.Router();



//Create a product for STORE
router.post('/admin/product/createproduct/:storeId', createProduct);


module.exports = router;