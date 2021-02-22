const express = require('express');
const { createProduct, getallProduct, updateProduct, getProductById } = require('../controllers/product');
const router = express.Router();
router.param("productId", getProductById);


//Create a product for STORE
router.post('/admin/product/createproduct/:storeId', createProduct);
router.get('/admin/product/getallProducts', getallProduct);
router.put('/admin/product/updateProducts/:productId', updateProduct);


module.exports = router;