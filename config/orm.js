var connection = require("./connection.js");

module.exports = {
			// selectAll()
			selectAll: function(){
				connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
				  if (err) throw err;
				  console.log('The orm soln is: ', rows[0].solution);
				});
			},
			//selectOne()
			selectOne: function(){
				connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
				  if (err) throw err;
				  console.log('The orm soln is: ', rows[0].solution);
				});
			},
			// updateOne()
			updateOne: function(){
				connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
				  if (err) throw err;
				  console.log('The orm soln is: ', rows[0].solution);
				});
			}
	}




// selectAll()
//selectOne()
// updateOne