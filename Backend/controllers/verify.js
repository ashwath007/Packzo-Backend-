const User = require("../models/user");
require("dotenv").config();
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");



exports.userVerify = (req, res) => {

    console.log(req.body);
    User.findOne({ code: req.body.code }, (err, gotUser) => {
        if (err) {
            return res.status(404).json({
                error: err
            })
        }
        if (gotUser == null) {
            return res.json({
                msg: "Please enter the correct code"
            })
        } else {

            // Here we need to generate JWT and sent it 
            gotUser.verifyed = true;
            gotUser.save((err, verCode) => {
                if (gotUser == null) {
                    return res.json({
                        msg: "Please enter the correct code"
                    })
                }

            });
            return res.json({
                msg: gotUser
            })
        }
    });
}