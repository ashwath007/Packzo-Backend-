require("dotenv").config();
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const { v4: uuidv4 } = require('uuid');

const User = require('../models/user');
const Passcode = require('../models/adminpasscode');

exports.adminSignup = (req, res) => {
    console.log(req.body);

}

exports.setPasscode = (req, res) => {
    console.log(req.body);
    const passCode = new Passcode(req.body);
    console.log(": ggg");
    passCode.save((err, done) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        console.log(done);
        done.code = uuidv4();
        done.save((err, okok) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            return res.json({
                secret: okok.code
            })

        });

    });
}