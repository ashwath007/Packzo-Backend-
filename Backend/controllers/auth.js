+.+require("dotenv").config();
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const User = require('../models/user');

exports.adminSignup = (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
}