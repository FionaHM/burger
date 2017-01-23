var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var PORT = process.env.PORT || 8080;
var app = express();
// var burger = require('./models/burger.js');

// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }));
// // parse some custom thing into a Buffer 
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// create application/json parser 
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }));

// burger.burgers();


app.listen(PORT);