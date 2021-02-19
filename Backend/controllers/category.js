const Category = require("../models/category");


exports.createCategory = (req, res) => {

    const category = new Category(req.body);
    category.save((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "NOT able to save category in DataBase"
            });
        }
        res.json({ category });
    });
};