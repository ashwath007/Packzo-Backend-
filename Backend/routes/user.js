const express = require('express');
const router = express.Router();
const { userSignup } = require('../controllers/user');


router.post("/user/signup", userSignup);


module.exports = router;