const express = require('express');
const app = express();

const chalk = require('chalk');


app.get('/', (req, res) => {
    res.send();
});


app.listen(3030, () => {
    console.log(chalk.red('Hi ', chalk.underline('Server Started') + '!'));
});