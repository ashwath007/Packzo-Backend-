const mongoose = require('mongoose');



const passCodeSchema = new mongoose.Schema({
    passcode:{
        type: String,
        require: true,
        maxlength:10
    }
});


module.exports = mongoose.model('Passcode',passCodeSchema)