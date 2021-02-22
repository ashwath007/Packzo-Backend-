const Product = require('../models/product');
const Store = require('../models/store');
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
exports.createProduct = (req, res) => {

    console.log("Creating product")
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
        const { name, description, price, category, stock } = fields;

        if (!name || !description || !price || !category || !stock) {
            return res.status(400).json({
                error: "Please include all fields"
            });
        }

        let product = new Product(fields);

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
                    error: "Saving product in DB failed"
                });
            }
            console.log(req.params.storeId);
            Store.findById({ _id: req.params.storeId }, (err, done) => {
                if (err) {
                    return res.status(400).json({
                        error: "Store not found"
                    });
                }
                console.log(done);
                done.product = product._id;
                done.save((er, ok) => {
                    if (err) {
                        res.status(400).json({
                            error: er
                        });
                    }
                    return res.json({
                        products: product,
                        stores: ok
                    })
                });
            })
        });
    });

}