var db = require('../config/orm.js');

module.exports = {
	burgers:  function(){
		console.log(db.selectOne());
	}
}