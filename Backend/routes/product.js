const express = require('express');
const { createProduct, getallProduct, updateProduct, getProductById, deleteProduct, getAllUniqueCategories } = require('../controllers/product');
const router = express.Router();
router.param("productId", getProductById);


//Create a product for STORE
router.post('/admin/product/createproduct/:storeId', createProduct);
router.get('/admin/product/getallProducts', getallProduct);
router.put('/admin/product/updateProducts/:productId', updateProduct);
router.delete('/admin/product/deleteProducts/:productId', deleteProduct);
router.delete('/admin/product/deleteProducts/:productId', deleteProduct);
router.get("/admin/product/getcategoryProducts", getAllUniqueCategories);

module.exports = router;