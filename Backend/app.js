require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const chalk = require('chalk');



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

app.get('/', (req, res) => {
    res.send();
});

//PORT
const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(chalk.red('Hi ', chalk.underline('Server Started') + '!'));
});