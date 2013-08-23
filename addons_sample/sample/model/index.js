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
					get: function(ids, data, callback) {
						var res = {};
						_.each(ids, function(id) {
							res[id] = 'hello moto OK';
						});
						callback(res);
					}
				})
			},
			interest: [types.auto()],
			username: types.auto({

			}),
			password: types.auto({
				validate: function(data) {
					data = this._super(data);
					if(data !== undefined) {
						return data + ' OK DONE OK';
					};
					return undefined;
				}
			}),
			type: types.func({
				get: function(ids, data, callback) {
					var res = {};
					_.each(ids, function(id) {
						res[id] = 'hello moto OK';
					});
					callback(res);
				}
			})
		},
	});

};
