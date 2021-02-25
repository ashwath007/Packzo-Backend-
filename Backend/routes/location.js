const express = require('express');
const router = express.Router();
const { getAllLocation } = require("../controllers/location");



router.get("/user/getalllocation", getAllLocation);


module.exports = router;