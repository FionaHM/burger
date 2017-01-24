var burger = require('../models/burger.js');
var exprhbs = require('express-handlebars'); 
var methodOverride = require("method-override");

// I pass the app in as a parameter - this means i dont need to require express above
function router(app){
	// this tells express what template engine to use and the default template lives (main)
	app.engine('handlebars', exprhbs({defaultLayout: 'main'}));
	// this sets the view engine to handlebars
	app.set('view engine', 'handlebars');

	// Override with POST having ?_method=PUT or DELETE
	app.use(methodOverride("_method"));

	// adds a new item to the database
	app.post("/add", function (req, res) {
		var burgerName = req.body.burgername;
		burger.burgerAddOne(burgerName).catch(function(err){
			reject(err);
		})
		// reloads homepage
		res.redirect("/");	
	})
	// this put command updates an item in the database 
	app.put("/update/:id", function (req, res) {
		// id is captured from the url as a parameter
		var burgerId = req.params.id;
		burger.burgerUpdateOne(burgerId).catch(function(err){
			reject(err);
		})
		// reloads homepage
		res.redirect("/");	
	})
	// this delete command removes an item from the database 
	app.delete("/delete/:id", function (req, res) {
		// id is captured from the url as a parameter
		var burgerId = req.params.id;
		burger.burgerRemoveOne(burgerId).catch(function(err){
			reject(err);
		})
		// reloads homepage
		res.redirect("/");	
	})

	// app.use this routes the url request to the right page
	// i decided to put app.use so anything other than a predefined route
	// will bring up the home page
	// i found this must be the last route in the list
	app.use(function(req, res){
		burger.burgers().then(function(response){
			res.render('index', { burgers: response[0], noBurgers: response[1], devoured: response[2], noDevoured: response[3]  });
		}).catch(function(err){
			reject(err);
		})	
	})
}

module.exports = router;