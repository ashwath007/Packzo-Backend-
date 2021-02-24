const express = require('express');
const { createCategory, updateCategory, deleteCategory, getallCategory } = require('../controllers/category');
const { isAuthenticated } = require('../controllers/auth');

const router = express.Router();


//Get All Category
router.get('/admin/category/getallcategory', getallCategory);


//Create category
router.post('/admin/:adminId/category/createcategory', isAuthenticated, createCategory);
//Edit category
router.put(
    "/admin/:adminId/category/:categoryId/edit",
    isAuthenticated,
    updateCategory
);
//Delete category
router.delete(
    "/admin/:adminId/category/:categoryId/delete",
    isAuthenticated,
    deleteCategory
);


module.exports = router;