var connection = require("./connection.js");

module.exports = {
		// selectAll()
		selectAll: function(){
			return new Promise(function(resolve, reject){
				connection.query('SELECT * from burgers_db.burgers', function(err, rows, fields) {
				  	if (err) reject(err);
					var burgerArr = [];
					var devouredArr = [];
					// store this data in an array 
					for (var i = 0; i < rows.length; i++){
						if (rows[i].devoured === 0){
							burgerArr.push(rows[i]);
						} else {
							devouredArr.push(rows[i])
						}
					}
					// send back the array 
					resolve([burgerArr,devouredArr]);
				});

			});
		},
		insertOne: function(burgerName){
			return new Promise(function(resolve, reject){
				connection.query('INSERT INTO burgers_db.burgers (burger_name) values (?) ', [burgerName], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		},

		updateOne: function(burgerId){
			return new Promise(function(resolve, reject){
				connection.query('UPDATE burgers_db.burgers set devoured=1 where id = ?', [burgerId], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		},
		deleteOne: function(burgerId){
			return new Promise(function(resolve, reject){
				connection.query('DELETE from burgers_db.burgers where id = ?', [burgerId], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		}
}

