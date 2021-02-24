const express = require('express');
const { createProduct, getallProduct, updateProduct, getProductById, deleteProduct, getAllUniqueCategories } = require('../controllers/product');
const router = express.Router();
const { isAuthenticated } = require('../controllers/auth');

router.param("productId", getProductById);


//Create a product for STORE
router.post('/admin/:adminId/product/createproduct/:storeId', isAuthenticated, createProduct);
router.get('/admin/:adminId/product/getallProducts', getallProduct);
router.put('/admin/:adminId/product/updateProducts/:productId', isAuthenticated, updateProduct);
router.delete('/admin/:adminId/product/deleteProducts/:productId', isAuthenticated, deleteProduct);
// router.delete('/admin/product/deleteProducts/:productId', deleteProduct);
router.get("/admin/:adminId/product/getcategoryProducts", getAllUniqueCategories);

module.exports = router;