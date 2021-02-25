const express = require('express');
const router = express.Router();
const { userSignup, userSignin } = require('../controllers/user');


router.post("/user/signup", userSignup);
router.post("/user/signin", userSignin);



module.exports = router;