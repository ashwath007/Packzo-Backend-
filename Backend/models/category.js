const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: false,
        maxlength: 102,
    }
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);