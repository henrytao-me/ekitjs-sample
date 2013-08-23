var path = require('path');

module.exports = function(instance, def) {

	instance.sample.cIndex = instance.base.controller.extend({
		'*': function(req, res, next) {
			this.pool('sample.user').read({}, function(err, data) {
				res.render(path.join(__dirname, '..', 'static', 'view', 'index'), {
					css: def.asset.renderTags('css'),
					js: def.asset.renderTags('js'),
					data: data
				});
			});
		},
		'get://create': function(req, res, next) {
			res.render(path.join(__dirname, '..', 'static', 'view', 'create'), {
				css: def.asset.renderTags('css'),
				js: def.asset.renderTags('js')
			});
		},
		'post://create': function(req, res, next) {
			this.pool('sample.user').create({
				name: {
					first: req.body.first,
					last: req.body.last,
				},
				username: req.body.username,
				password: req.body.password
			}, function(e, data){
				if(e){
					res.send({
						e: true
					});
				}else{
					res.send({
						e: false
					});
				};
			});
		}
	});
};
