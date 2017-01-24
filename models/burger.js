var db = require('../config/orm.js');

// this module calls the module, db above,that runs the database queries
// it passes the response back to the controller module - because this module was called
// by the controller module. 
module.exports = {
	// returns all the burgers
	burgers:  function(){
		return new Promise(function(resolve, reject){
			db.selectAll().then(function(response){
				resolve(response);
			}).catch(function(err){
				reject(err);
			})
		})
	},
	// adds one burger by calling the function insertOne
	burgerAddOne:  function(burgerName){
		return new Promise(function(resolve, reject){
			db.insertOne(burgerName).then(function(response){
				resolve(response);
			}).catch(function(err){
				reject(err);
			})
		})
	},
	// updates one burger by calling the function updateOne
	burgerUpdateOne:  function(burgerId){
		return new Promise(function(resolve, reject){
			db.updateOne(burgerId).then(function(response){
				resolve(response);
			}).catch(function(err){
				reject(err);
			})
		})
	},	
	// removes one burger by calling the function deleteOne
	burgerRemoveOne:  function(burgerId){
		return new Promise(function(resolve, reject){
			db.deleteOne(burgerId).then(function(response){
				resolve(response);
			}).catch(function(err){
				reject(err);
			})
		})
	}
}