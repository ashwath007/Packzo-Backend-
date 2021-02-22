const mongoose = require('mongoose');



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
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    stype: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    sphoto: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });


module.exports = mongoose.model("Store", storeSchema);