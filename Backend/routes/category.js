const express = require('express');
const { createCategory, updateCategory, deleteCategory, getallCategory } = require('../controllers/category');
const router = express.Router();


//Get All Category
router.get('/admin/category/getallcategory', getallCategory);


//Create category
router.post('/admin/category/createcategory', createCategory);
//Edit category
router.put(
    "/admin/category/:categoryId/edit",
    updateCategory
);
//Delete category
router.delete(
    "/admin/category/:categoryId/delete",
    deleteCategory
);


module.exports = router;