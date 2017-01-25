var orm = require('../config/orm.js');

// this module calls the module, db above,that runs the database queries
// it passes the response back to the controller module - because this module was called
// by the controller module. 
module.exports = {
	// returns all the burgers
	burgers:  function(){
		return new Promise(function(resolve, reject){
			orm.selectAll('*', 'burgers', 'date_timestamp').then(function(rows){
				// created 2 arrays to separate the devoured and non-devoured elements
				var burgerArr = [];
				var devouredArr = [];
				// store this data in the appropriate array 
				// determine
				for (var i = 0; i < rows.length; i++){
					if (rows[i].devoured === 0){
						burgerArr.push(rows[i]);
					} else {
						devouredArr.push(rows[i])
					}
				}
				// create 2 booleans to let the client know if no data available
				// one for the burgers list
				var noBurgers = false;
				if (burgerArr.length === 0){
					noBurgers = true;
				}
				// one for the devoured list
				var noDevouredBurgers = false;
				if (devouredArr.length === 0){
					noDevouredBurgers = true;
				}
				// send back both booleans and both arrays
				resolve([burgerArr, noBurgers, devouredArr, noDevouredBurgers]);

			}).catch(function(err){
				reject(err);
			})
		})
	},
	// adds one burger by calling the function insertOne
	burgerAddOne:  function(burgerId){
		return new Promise(function(resolve, reject){
			orm.insertOne('burgers','burger_name', burgerId).then(function(response){
				resolve(response);
			}).catch(function(err){
				reject(err);
			})
		})
	},
	// updates one burger by calling the function updateOne
	burgerUpdateOne:  function(burgerId){
		return new Promise(function(resolve, reject){
			orm.updateOne('burgers', 'devoured', 'id', burgerId).then(function(response){
				resolve();
			}).catch(function(err){
				reject(err);
			})
		})
	},	
	// removes one burger by calling the function deleteOne
	burgerRemoveOne:  function(burgerId){
		return new Promise(function(resolve, reject){
			orm.deleteOne('burgers', 'id', burgerId).then(function(response){
				resolve();
			}).catch(function(err){
				reject(err);
			})
		})
	}
}