var connection = require("./connection.js");

module.exports = {
			// selectAll()
			selectAll: function(){
				return new Promise(function(resolve, reject){
					connection.query('SELECT * from burgers_db.burgers', function(err, rows, fields) {
					  	if (err) reject(err);
						var burgerArr = [];
						// store this data in an array 
						for (var i = 0; i < rows.length; i++){
							burgerArr.push(rows[i])
						}
						// send back the array 
						resolve(burgerArr);
					});
				});
			},
			
			selectOne: function(){
				return new Promise(function(resolve, reject){
					connection.query('SELECT * from burgers_db.burgers', function(err, rows, fields) {
					  	if (err) reject(err);
						var burgerArr = [];
						// store this data in an array 
						for (var i = 0; i < rows.length; i++){
							burgerArr.push(rows[i])
						}
						// send back the array 
						resolve(burgerArr);
					});
				});
			},

			updateOne: function(){
				return new Promise(function(resolve, reject){
					connection.query('SELECT * from burgers_db.burgers', function(err, rows, fields) {
					  	if (err) reject(err);
						var burgerArr = [];
						// store this data in an array 
						for (var i = 0; i < rows.length; i++){
							burgerArr.push(rows[i])
						}
						// send back the array 
						resolve(burgerArr);
					});
				});
			},
	}




// selectAll()
//selectOne()
// updateOne