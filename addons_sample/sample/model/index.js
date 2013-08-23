var path = require('path');

module.exports = function(instance) {
	var types = instance.base.types;
	
	instance.sample.user = instance.base.model.extend({
		_name: 'user',
		_column: {
			name: {
				first: types.auto({
					require: true
				}),
				last: types.auto(),
				full: types.func({
					get: function(ids, data, callback){
						var res = {};
						this.read({
							_id: {
								$in: ids
							}
						}, function(err, docs) {
							_.each(docs, function(doc) {
								res[doc._id] = [doc.name.first, doc.name.last].join(' ');
							});
							callback(res);
						});
					}
				})
			},
			username: types.auto(),
			password: types.auto({
				validate: function(data) {
					if(data !== undefined){
						return 'md5_' + data;
					};
					return undefined;
				}
			})
		},
	});
	
};
