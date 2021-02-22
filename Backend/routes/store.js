const express = require('express');
const { createStore } = require('../controllers/store');
const router = express.Router();



//Create
router.post('/admin/store/createstore', createStore);


module.exports = router;