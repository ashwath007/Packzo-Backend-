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




app.get('/', (req, res) => {
    res.send();
});


app.listen(3030, () => {
    console.log(chalk.red('Hi ', chalk.underline('Server Started') + '!'));
});