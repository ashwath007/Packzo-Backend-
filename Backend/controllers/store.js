const Store = require("../models/store");
const Product = require("../models/product");
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
                    error: err
                });
            }
            res.json(product);
        });
    })
};


exports.editStore = (req, res) => {
    console.log(req.params.storeId);
    Store.findById({ _id: req.params.storeId }, (err, done) => {
        if (err) {
            return res.status(404).json({
                error: data.error
            })
        } else {
            done.name = req.body.name;
            done.decription = req.body.decription;
            done.location = req.body.location;
            done.stype = req.body.stype;
            done.save((err, okok) => {
                if (err) {
                    return res.status(404).json({
                        error: okok.error
                    })
                }
                return res.json({
                    data: okok
                })
            })



        }
    })

}

exports.deleteStore = (req, res) => {
    console.log(req.params.adminId);
    console.log("Here Deleting Store");
    console.log(req.params.storeId);
    Store.findById(req.params.storeId, (err, done) => {
        if (err) {
            return res.status(404).json({
                error: err
            })
        }
        if (done == null) return json({ msg: "Please select correct store" })
        else {

            console.log(done.product);
            const all_product = done.product;
            Product.deleteMany(

                {
                    _id: {
                        $in: all_product
                    }
                }, (err, deletiondone) => {
                    if (err) {
                        return res.status(404).json({
                            error: err
                        })
                    }
                    if (deletiondone == null) {
                        return res.json({
                            msg: " Some Error in Deletion"
                        })
                    } else {
                        Store.findByIdAndDelete(req.params.storeId, (err, deldone) => {
                            if (err) {
                                return res.status(404).json({
                                    error: err
                                })
                            }
                            if (deldone == null) {
                                return res.json({
                                    msg: " Some Error in Deletion Store"
                                })
                            } else {
                                return res.json({
                                    msg: "Deletion done",
                                    data: deletiondone
                                })
                            }

                        })

                    }

                }
            );
        }

    });
}

exports.getAllStores = (req, res) => {
    Store.find({}, (err, allStore) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image"
            });
        }
        if (allStore == null) {
            return res.status(400).json({
                msg: "All store not found"
            });
        } else {
            return res.json({
                stores: allStore
            })
        }
    });
}


exports.getStoreById = (req, res) => { // TODO 13 Need to test - Middle Ware
    Store.findById(req.params.storeId)
        .exec((err, store) => {
            if (err) {
                return res.status(400).json({
                    error: "Store not found"
                });
            }
            return res.json({
                storeData: store
            })
        });
};