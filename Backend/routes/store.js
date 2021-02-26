const express = require('express');
const { createStore } = require('../controllers/store');
const router = express.Router();
const { isAuthenticated } = require('../controllers/auth');



//Create
router.post('/admin/:adminId/store/createstore', isAuthenticated, createStore);


module.exports = router;