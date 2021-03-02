const express = require('express');
const { createStore, editStore, deleteStore, getAllStores, getStoreById } = require('../controllers/store');
const router = express.Router();
const { isAuthenticated } = require('../controllers/auth');



//Create
router.post('/admin/:adminId/store/createstore', isAuthenticated, createStore);

//Edit Store
router.put('/admin/:adminId/store/editstore/:storeId', isAuthenticated, editStore);

//Store Deletion and (Array Product Deletion)
router.delete('/admin/:adminId/store/deletestore/:storeId', isAuthenticated, deleteStore);

router.get('/admin/getStoreInfo/:storeId', getStoreById);


//User Store Search

router.get('/admin/category/getallstores', getAllStores);

module.exports = router;