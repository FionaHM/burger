var burger = require('../models/burger.js');
var exprhbs = require('express-handlebars'); 
// var express = require('express');
// var app = express();

function router(app){
	// this tells express what template engine to use and the default template lives (main)
	app.engine('handlebars', exprhbs({defaultLayout: 'main'}));
	// this sets the view engine to handlebars
	app.set('view engine', 'handlebars');
	// this routes the url request to the right page
	app.get('/index', function(req, res){
		// var rows = ;
		burger.burgers().then(function(response){
			console.log(response);
			res.render('index', { burgers: response });
		}).catch(function(err){
			reject(err);
		})	
	})
}

module.exports = router;