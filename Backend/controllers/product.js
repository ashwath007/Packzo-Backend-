const express = require("express");
const router = express.Router();

const {
    // getProductById,
    createProduct,
    // getProduct,
    // photo,
    // updateProduct,
    // deleteProduct,
    // getAllProducts,
    // getAllUniqueCategories
} = require("../controllers/product");


//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes
// create route
router.post(
    "/product/create",

    createProduct
);

// read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete route
router.delete(
    "/product/:productId/admin",
    // isSignedIn,
    // isAuthenticated,
    // isAdmin,
    deleteProduct
);

//update route
router.put(
    "/product/:productId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateProduct
);

//listing route
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;