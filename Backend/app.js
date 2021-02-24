require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const chalk = require('chalk');


//My routes
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const storeRoutes = require("./routes/store");
const userRoutes = require("./routes/user");

//PORT
const port = process.env.PORT || 8000;


//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//DB Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("DB CONNECTED");
    });



//Task one focusing on Admin

app.get('/', (req, res) => {
    // res.send();
});




//Admin Routes
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", storeRoutes);
app.use("/api", userRoutes);





app.listen(port, () => {
    console.log(chalk.red('Hi ', chalk.underline('Server Started at : ' + port) + '!'));
});