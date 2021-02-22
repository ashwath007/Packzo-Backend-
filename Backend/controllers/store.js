const Store = require("../models/store");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


exports.createStore = (req, res) => {
    console.log('createStore');

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        console.log("fields ", fields)

        if (err) {
            return res.status(400).json({
                error: "problem with image"
            });
        }
        //destructure the fields
        const { name, description, stype } = fields;

        if (!name || !description || !stype) {
            return res.status(400).json({
                error: "Please include all fields"
            });
        }

        let product = new Store(fields);

        //handle file here
        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.status(400).json({
                    error: "File size too big!"
                });
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type;
        }
        // console.log(product);

        //save to the DB
        product.save((err, product) => {
            if (err) {
                res.status(400).json({
                    error: "Saving tshirt in DB failed"
                });
            }
            res.json(product);
        });

    })
};