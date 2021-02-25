const mongoose = require('mongoose');
const { stringify } = require('uuid');
const { ObjectId } = mongoose.Schema;


const storeSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 200
    },
    location: {
        type: { type: String },
        coordinates: []
    },
    address: {
        type: String
    },
    stype: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    product: {
        type: [ObjectId],
        ref: "Product"
    },
}, { timestamps: true });


module.exports = mongoose.model("Store", storeSchema);