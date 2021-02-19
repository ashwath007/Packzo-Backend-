const express = require('express');
const { adminSignup } = require('../controllers/auth');


const router = express.Router();

router.post('/admin', adminSignup);



module.exports = router;