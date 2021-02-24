require("dotenv").config();
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const User = require('../models/user');

exports.adminSignup = (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save((err,done)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        
    });
}




exports.signin = (req, res) => {
    console.log("Hit");
    console.log(req.body);
    const PHONE = "+91" + req.body.phone;
    User.findOne({ phone: req.body.phone }, (err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: "User phone does not exists, please signup"
                });
            }
            if (err) {
                console.log("ERROR", err);

                return res.status(400).json({
                    error: err
                })

            } else {
                console.log("USER : ", user);
                if (user != null) {
                    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
                    res.cookie("token", token, { expire: new Date() + 99999 });
                    const { _id, name, phone, role } = user;
                    return res.json({ token, user: { _id, name, phone, role } });
                } else {
                    return 0
                }


            }
        })
        // const errors = validationResult(req);
        // const { email, password } = req.body;

    // if (!errors.isEmpty()) {
    //     return res.status(422).json({
    //         error: errors.array()[0].msg
    //     });
    // }

    // User.findOne({ email }, (err, user) => {
    //     if (err || !user) {
    //         return res.status(400).json({
    //             error: "USER email does not exists"
    //         });
    //     }

    //     if (!user.autheticate(password)) {
    //         return res.status(401).json({
    //             error: "Email and password do not match"
    //         });
    //     }

    //create token
    // const token = jwt.sign({ _id: "user._id" }, "hooo");
    //put token in cookie
    // res.cookie("token", token, { expire: new Date() + 9999 });

    // send response to front end
    // const { _id } = user;
    // return res.json({ token, user: "vicky" });
    // });
};