const User = require("../models/user");
const randomizr = require('randomizr');

exports.userSignup = (req, res) => {
    console.log(req.body);
    const user = new User(req.body);


    // TODO 1 : User CODE 
    // TODO 2 : User verifyed or not, Location
    const CODE = randomizr.range(100000, 9999999)
    console.log(CODE);
    // user.save((err, done) => {
    //     if (err) {
    //         return res.status(404).json({
    //             error: err
    //         })
    //     }


    //     //refer: https://github.com/ashwath007/hotel/blob/main/backend/controllers/auth.js

    // });



}