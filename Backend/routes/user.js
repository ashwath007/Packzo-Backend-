const express = require('express');
const router = express.Router();
const { userSignup, userSignin } = require('../controllers/user');
const { userVerify } = require('../controllers/verify');

router.post("/user/signup", userSignup);
router.post("/user/signin", userSignin);
router.post("/user/verify", userVerify);



module.exports = router;