const Product = require('../models/product');
const Store = require('../models/store');
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = (req, res, next, id) => { // TODO 12 Need to test
    Product.findById(id)
        .populate("category")
        .exec((err, product) => {
            if (err) {
                return res.status(400).json({
                    error: "Product not found"
                });
            }
            req.product = product;
            next();
        });
};
exports.getProductById = (req, res, next, id) => { // TODO 13 Need to test - Middle Ware
    Product.findById(id)
        .populate("category")
        .exec((err, product) => {
            if (err) {
                return res.status(400).json({
                    error: "Product not found"
                });
            }
            req.product = product;
            next();
        });
};

exports.getallProduct = (req, res) => {
    Product.find({}, (err, all) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.json({
            products: all
        })
    });
};
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
                done.product.push(product._id);
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
exports.updateProduct = (req, res) => {
    console.log(req.params.productId);

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image"
            });
        }

        //updation code
        let product = req.product;
        product = _.extend(product, fields);
        console.log(product)
            //handle file here
        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.status(400).json({
                    error: "File size too big!"
                });
            }
            if (product == undefined) {
                return res.json({
                    msg: "Product does't exist"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type;
        }
        // console.log(product);

        //save to the DB
        product.save((err, product) => {
            if (err) {
                res.status(400).json({
                    error: "Updation of product failed"
                });
            }
            res.json(product);
        });
    });
}



exports.deleteProduct = (req, res) => {
    console.log(req.params.productId);
    Product.findByIdAndDelete(req.params.productId, (err, done) => {
        if (err) {
            res.status(400).json({
                error: "Delection of product failed"
            });
        }
        return res.json({
            status: 'Deleted Sucessfuly'
        })
    });
}


exports.getAllUniqueCategories = (req, res) => {
    Product.distinct("category", {}, (err, category) => {
        if (err) {
            return res.status(400).json({
                error: "NO category found"
            });
        }
        res.json(category);
    });
};

exports.getAllproducts = (req, res) => {
    console.log(req.params.storeId);
    // Here we need to send all Product Information based on the Stores
}

exports.getProduct = (req, res) => {
    req.Store.photo = undefined;
    return res.json(req.Store);
};
exports.photo = (req, res, next) => {
    if (req.Store.photo.data) {
        res.set("Content-Type", req.Store.photo.contentType);
        return res.send(req.Store.photo.data);
    }
    next();
};

exports.getaproductfromstore = (req, res) => {
    console.log(req.params.productId)
    Product.findById({ _id: req.params.productId }, (err, done) => {
        if (err) {
            console.log(err)

            return res.status(404).json({
                error: err
            })
        } else {
            console.log(done)
            return res.json({
                data: done
            })
        }
    })
}