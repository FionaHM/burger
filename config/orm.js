var connection = require("./connection.js");

// this module runs the queries on the database
// it is exported and can be used by other modules though require.
module.exports = {
		// selectAll() - selects everything from the burgers table.
		selectAll: function(fieldsToSelect, tableName, orderbyField){
			return new Promise(function(resolve, reject){
				// var querString = "SELECT ?? FROM (SELECT ?? FROM ?? ORDER BY ?? DESC LIMIT 10 ) T1 ORDER BY ??";
				var queryString = 'SELECT ?? from ?? order by ?? desc limit 10';
				connection.query(queryString, [ fieldsToSelect, tableName, orderbyField ], function(err, rows, fields) {
				  	if (err) reject(err);
				  	resolve(rows);
				});

			});
		},
		// this function inserts a new burger into the burgers table with a unique id and timestamp
		insertOne: function(tableName, fieldToInsert, insertValue){
			return new Promise(function(resolve, reject){
				var queryString = 'INSERT INTO ?? ( ?? ) values (?)';
				connection.query( queryString, [tableName, fieldToInsert, insertValue], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		},
		// this function updates the devoured field when a burger is devoured, the burger is identified by it unique id
		updateOne: function(tableName, updateField, whereField, fieldIdValue){
			return new Promise(function(resolve, reject){
				var queryString = 'UPDATE ?? set ?? = 1 where ?? = ?';
				connection.query(queryString, [tableName, updateField, whereField, fieldIdValue], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		},
		// this function deletes the devoured burger, the burger is identified by it unique id
		deleteOne: function(tableName, fieldToDelete, fieldId){
			return new Promise(function(resolve, reject){
				var querString = 'DELETE from ?? where ?? = ?';
				connection.query(querString, [tableName, fieldToDelete, fieldId], function(err, rows, fields) {
				  	if (err) reject(err);
					resolve();
				});
			});
		}
}

