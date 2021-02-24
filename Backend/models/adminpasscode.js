const mongoose = require('mongoose');



const passCodeSchema = new mongoose.Schema({
    passcode: {
        type: String,
        require: true,
        maxlength: 11
    },
    code: {
        type: String

    }
});


module.exports = mongoose.model("Passcode", passCodeSchema);