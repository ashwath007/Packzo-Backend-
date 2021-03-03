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
    console.log(req.body);
    Category.findById(categoryId, (err, got) => {
        if (err) {
            return res.status(400).json({
                error: "NOT able to edit Category"
            });
        }
        console.log(got)
        got.name = req.body.name;
        got.description = req.body.description;
        got.save((err, tt) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.json(tt)
        })
    })
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

exports.aCategory = (req, res) => {
    Category.findById({ _id: req.params.cateId }, (err, ok) => {
        if (err) {
            return res.status(400).json({
                err: "error category"
            })
        }
        return res.json({
            data: ok
        })
    })
}