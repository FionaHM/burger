var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '01B00tKamp09',
  database : 'burgers_db'
});
// connect to the database
connection.connect();
// test the connection
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
});
// share the connection with other modules
module.exports = connection;