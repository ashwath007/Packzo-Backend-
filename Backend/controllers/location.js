const Store = require("../models/store");

exports.getAllLocation = (req, res) => {
    Store.find({}, (err, allLoc) => {
        if (err) {
            return res.status(404).json({
                error: err
            })
        }
        return res.json({
            locations: allLoc.locations,
            // stores: allLoc
        })
    });
}