var connection = require("./connection.js");

// this module runs the queries on the database
// it is exported and can be used by other modules though require.
module.exports = {
		// selectAll() - selects everything from the burgers table.
		selectAll: function(){
			return new Promise(function(resolve, reject){
				connection.query('SELECT * from burgers_db.burgers', function(err, rows, fields) {
				  	if (err) reject(err);
				  	// created 2 arrays to separate the devoured and non-devoured elements
					var burgerArr = [];
					var devouredArr = [];
					// store this data in the appropriate array 
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
				});

			});
		},
		// this function inserts a new burger into the burgers table with a unique id and timestamp
		insertOne: function(burgerName){
			return new Promise(function(resolve, reject){
				connection.query('INSERT INTO burgers_db.burgers (burger_name) values (?) ', [burgerName], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		},
		// this function updates the devoured field when a burger is devoured, the burger is identified by it unique id
		updateOne: function(burgerId){
			return new Promise(function(resolve, reject){
				connection.query('UPDATE burgers_db.burgers set devoured=1 where id = ?', [burgerId], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		},
		// this function deletes the devoured burger, the burger is identified by it unique id
		deleteOne: function(burgerId){
			return new Promise(function(resolve, reject){
				connection.query('DELETE from burgers_db.burgers where id = ?', [burgerId], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		}
}

