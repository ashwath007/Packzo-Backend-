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


exports.updateCategory = (req, res) => {
    console.log("Update category");
    const categoryId = req.params.categoryId;
    console.log(categoryId);
    Category.findByIdAndUpdate(req.params.categoryId, req.body, (err, docs) => {
        if (err) {
            return res.status(400).json({
                err: "counld't finnf the ID"
            })
        }
        if (docs == null) {
            return res.status(400).json({
                err: "counld't find the Category"
            })
        }
        docs.name = req.body.name;
        docs.description = req.body.description;
        docs.save((err, done) => {
            if (err) {
                return res.status(400).json({
                    err: "counld't save the category"
                })
            }
            return res.status(400).json({
                msg: done
            })
        });
    });
}


exports.deleteCategory = (req, res) => {
    Category.findByIdAndDelete(req.params.categoryId, (err, done) => {
        if (err) {
            return res.status(400).json({
                err: "counld't delete"
            })
        }
        return res.status(400).json({
            msg: done
        })
    });
}


exports.getallCategory = (req, res) => {
    Category.find({}, (err, done) => {
        if (err) {
            return res.status(400).json({
                err: "error category"
            })
        }
        console.log(done)
        return res.status(400).json({
            categories: done
        })
    })
}