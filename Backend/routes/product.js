const express = require('express');
const { createProduct, getallProduct, updateProduct, getProductById, deleteProduct, getAllUniqueCategories, getAllproducts, photo, getProduct, getaproductfromstore } = require('../controllers/product');
const router = express.Router();
const { isAuthenticated } = require('../controllers/auth');

router.param("productId", getProductById);


//Create a product for STORE
router.post('/admin/:adminId/product/createproduct/:storeId', isAuthenticated, createProduct);
router.get('/admin/product/getallProducts', getallProduct);
router.put('/admin/:adminId/product/updateProducts/:productId', isAuthenticated, updateProduct);
router.delete('/admin/:adminId/product/deleteProducts/:productId', isAuthenticated, deleteProduct);
// router.delete('/admin/product/deleteProducts/:productId', deleteProduct);
router.get("/admin/product/getcategoryProducts", getAllUniqueCategories);

router.get("/admin/category/getallproduct/store/:storeId", getAllproducts);

router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

router.get("/admin/category/getaproduct/:productId", getaproductfromstore);


///api/admin/category/getallproduct
module.exports = router;