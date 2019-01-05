var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

const data = require('./foods.json')

app.get('/', function (req, res) {
    res.json(data);
 })

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});