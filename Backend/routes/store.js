const express = require('express');
const { createStore, editStore } = require('../controllers/store');
const router = express.Router();
const { isAuthenticated } = require('../controllers/auth');



//Create
router.post('/admin/:adminId/store/createstore', isAuthenticated, createStore);

//Edit Store
router.put('/admin/:adminId/store/editstore/:storeId', isAuthenticated, editStore);

module.exports = router;