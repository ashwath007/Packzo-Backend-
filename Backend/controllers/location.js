const Store = require("../models/store");

exports.getAllLocation = (req, res) => {
    Store.find({}, (err, allLoc) => {
        if (err) {
            return res.status(404).json({
                error: err
            })
        }
        return res.json({ // Need to work on Location stuff
            locations: allLoc.locations,
            // stores: allLoc
        })
    });
}