var db = require('../config/orm.js');

module.exports = {
	burgers:  function(){
		return new Promise(function(resolve, reject){
			db.selectAll().then(function(response){
				resolve(response);
			}).catch(function(err){
				reject(err);
			})
		})
	}
}