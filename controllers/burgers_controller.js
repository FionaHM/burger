var burger = require('../models/burger.js');
var exprhbs = require('express-handlebars'); 
var methodOverride = require("method-override");
// var express = require('express');
// var app = express();

function router(app){
	// this tells express what template engine to use and the default template lives (main)
	app.engine('handlebars', exprhbs({defaultLayout: 'main'}));
	// this sets the view engine to handlebars
	app.set('view engine', 'handlebars');
	// this routes the url request to the right page
	// i decided to put app.use so anything other than a predefined rout
	// will bring up the home page
	// Override with POST having ?_method=PUT or DELETE
	app.use(methodOverride("_method"));


	app.post("/add", function (req, res) {
		var burgerName = req.body.burgername;
		burger.burgerAddOne(burgerName).then(function(response){
			// console.log(response);
			// res.render('index', { burgers: response });
		}).catch(function(err){
			reject(err);
		})
		// reloads homepage
		res.redirect("/");	
	})

	app.put("/update/:id", function (req, res) {
		var burgerId = req.params.id;
		console.log(burgerId);
		burger.burgerUpdateOne(burgerId).then(function(response){
			// console.log(response);
			// res.render('index', { burgers: response });
		}).catch(function(err){
			reject(err);
		})
		// reloads homepage
		res.redirect("/");	
	})



	app.use(function(req, res){
		// var rows = ;
		burger.burgers().then(function(response){
			// console.log(response);
			res.render('index', { burgers: response[0], devoured: response[1]  });
		}).catch(function(err){
			reject(err);
		})	
	})
}

module.exports = router;