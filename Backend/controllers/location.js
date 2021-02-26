const Store = require("../models/store");

exports.getAllLocation = (req, res) => {
    //Here need to work on populating Location
    Store.find().populate('location').exec((err, allLocations) => {
        console.log(allLocations.location);
    });
}