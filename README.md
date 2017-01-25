#Burger
GitHub: 
https://github.com/FionaHM/burger

## About this application

This application allows a user to enter the name of a burger and then devour it. The user can also delete a devoured burger.

## Usage
The application is started on the commandline as follows:
######`> node server.js`

This will bring run a server instance listening on port 8080 locally or whatever port is used by the local environment.

```>The application is structured as follows:

![Image of screen1.png]
(readme_images/screen1.png)


```> The data in this application is persistent, it is stored in a mysql database. It will not be lost when the server is restarted. 

#  Files

## Application Entry:

### server.js 

This is the server side process. It is a node application, specifically express.js.  When this file is started up on the command line it starts an express.js server that listens on a predefined port for client connections. It then routes the connections based on the configuration data set in the controllers/burgers_controller.js file.  This server file also contains middleware information, in the form of the library body-parser, that parses incoming data to the required format.

###  controller/burgers_controller.js

This contains routing information for incoming url.

* POST requests are routed as follows: 
The path "/add" is routed to a post method in this controller file. This the calls on the data model to update the database - this is done in the line burger.burgerAddOne(burgerName).
	
* PUT requests are routed as follows:
The path "/update/:id" is routed to a put method in this controller file. This the calls on the data model to update the database - this is done in the line burger.burgerUpdateOne(burgerId).  The id of the item to be updated is captured from the url as a parameter.

* DELETE requests are routed as follows:
The path "/delete/:id" is routed to a delete method in this controller file. This the calls on the data model to delete an item from the database - this is done in the line burger.burgerRemoveOne(burgerId).  The id of the item to be deleted is captured from the url as a parameter.


* USE:
A use request is set to that any url that does not have a pre-specified route will result in the home page being served.  The homepage is populated with the burger data from the database by calling a function in the data model burger.burgers().  The results of this call are redendered to the page used in the index.handlebars view.


##   Data: 

###  connection.js

This file contains connection information for the mysql database.

###  orm.js

This files contains functions that query and update the database.

* selectAll - queries the burgers table and brings back all the burgers.
			
* insertOne - this function inserts a new burger into the burgers table with a unique id and timestamp
		
* updateOne - this function updates the devoured field when a burger is devoured, the burger is identified by it unique id
		
* deleteOne - this function deletes the devoured burger, the burger is identified by it unique id

###  schema.sql

* This file should be run before the server is started to create the underlying database schema.

###  seeds.sql

 This file should be run before the server is started to insert seed data into the database.

 ![Image of db_creation.png]
(readme_images/db_creation.png)

##   Views: 

* main.handlebars - this is the default template  and it lives in the views/layouts directory.

* index.handlebars - this is the main page and it is referenced by the  main.handlebars template. It lives in the views directory.


##   Other:

* node_modules                -	folder that contains relevant node modules
* package.json                - 	created when command ‘npm init’ is run.  Can be modified manually to include dependencies data or automatically when ‘npm install <library> --save’ is run e.g. ‘npm install inquirer --save’
* README.md                   - 	this file containing relevant operational information.


##  Integration with other libraries

The following libraries were used and those that are not native to node should be included in package.json.

### package.json should include:

#####`"dependencies": {`
#####`"inquirer": "^2.0.0"`
#####`}`


### body-parser

This library parses incoming request bodies in a middleware, available under the req.body property. Contains modules for JSON, text and URL encoded form.

### express

This is a web framework for node.js.

### express-handlebars
A Handlebars view engine for Express.

### method-override
Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

### mysql  
A node.js driver for mysql. 



#  License
FriendFinder is released under the MIT license.
