const express = require('express');
const router = express.Router();
const { userSignup, userSignin, userSignout } = require('../controllers/user');
const { userVerify } = require('../controllers/verify');

router.post("/user/signup", userSignup);
router.post("/user/signin", userSignin);
router.post("/user/verify", userVerify);
router.get("/user/signout", userSignout);




module.exports = router;