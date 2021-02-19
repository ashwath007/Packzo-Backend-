const express = require('express');
const { createCategory } = require('../controllers/category');
const router = express.Router();



//Create category
router.post('/admin/createcategory', createCategory);


module.exports = router;