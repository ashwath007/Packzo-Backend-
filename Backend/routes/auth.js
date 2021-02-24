const express = require('express');
const { adminSignup } = require('../controllers/auth');


const router = express.Router();


// Here we are having single ADMIN to handle all the Admin operations
router.post('/admin/signIn', adminSignup);



module.exports = router;