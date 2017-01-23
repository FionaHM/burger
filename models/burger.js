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
	},
	burgerAddOne:  function(burgerName){
		return new Promise(function(resolve, reject){
			db.insertOne(burgerName).then(function(response){
				resolve(response);
			}).catch(function(err){
				reject(err);
			})
		})
	},
	burgerUpdateOne:  function(burgerId){
		return new Promise(function(resolve, reject){
			db.updateOne(burgerId).then(function(response){
				resolve(response);
			}).catch(function(err){
				reject(err);
			})
		})
	},	
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