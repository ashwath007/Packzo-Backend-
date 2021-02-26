const User = require("../models/user");
const randomizr = require('randomizr');
exports.userSignup = (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    // TODO 1 : User CODE 
    // TODO 2 : User verifyed or not, Location
    user.save((err, done) => {
        if (err) {
            return res.status(404).json({
                error: err
            })
        }
        const CODE = randomizr.range(100000, 9999999);
        User.findOne({ code: CODE }, (err, got) => {
            if (got == null) {
                console.log(CODE);
                done.code = CODE;
                done.save(function(err, codeDone) {
                    if (err) {
                        return res.status(404).json({
                            error: err
                        })
                    }
                    // Here we are sending OTP ie.,( CODE ) to the user though SMS
                    // Loading Next Page
                    return res.json({
                        msg: codeDone
                    })
                });
            } else {
                const CODE = randomizr.range(100000, 9999999);
                console.log(CODE);
                done.code = CODE;
                done.save(function(err, codeDone) {
                    if (err) {
                        return res.status(404).json({
                            error: err
                        })
                    }
                    // Here we are sending OTP ie.,( CODE ) to the user though SMS
                    // Loading Next Page
                    return res.json({
                        // msg: codeDone,
                        msg: "Navigate to Verifycation page"
                    });

                });
            }
        });
        //refer: https://github.com/ashwath007/hotel/blob/main/backend/controllers/auth.js
    });
}
exports.userSignin = (req, res) => {
    console.log(req.body);
    User.findOne({ phone: req.body.phone }, (err, done) => {
        if (err) {
            return res.status(404).json({
                error: err
            });
        }
        if (done == null) {
            return res.status(404).json({
                error: "Phone number is not found"
            });
        } else {

            const CODE = randomizr.range(100000, 9999999);
            done.code = CODE;
            done.save((err, saved) => {
                if (err) {
                    return res.status(404).json({
                        error: err
                    });
                }


                // Here we need to send the verifycation code to user

                return res.json({
                    msg: "Navigate to verification"
                });
            });


        }

    });
}

exports.userSignout = (req, res) => {

    res.clearCookie("token");
    res.json({
        message: "User signout successfully"
    });

}