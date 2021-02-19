require("dotenv").config();
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");


exports.adminSignup = (req, res) => {
    console.log(req.body);
}