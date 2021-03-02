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
            res.cookie("adminToken", okok.code, { expire: new Date() + 99999 });
            return res.json({
                adminId: okok.code
            })

        });

    });
}



//Middleware for Admin
exports.isAuthenticated = (req, res, next) => {
    let checker = req.params.adminId;
    console.log(typeof(checker));
    Passcode.findOne({ code: checker }, (err, done) => {
        console.log(done);
        if (err) {
            return res.status(403).json({
                error: err
            });
        }
        if (done == null) {
            return res.status(403).json({
                error: "ACCESS DENIED"
            });
        }
        next();

    });

};



//Clearing cookie
exports.signOut = (req, res) => {
    res.clearCookie("adminId");
    res.json({
        message: "User signout successfully"
    });
}



exports.admincode = (req, res) => {
    console.log("YEs");
    console.log(req.body);
    if (req.body.passcode === "8072002769") {
        console.log("God");
        const token = jwt.sign({ name: "admin" }, process.env.SECRET);
        //put token in cookie
        res.cookie("token", token, { expire: new Date() + 9999 });

        // send response to front end
        return res.json({ token, user: "admin", role: 1 });
    }
}