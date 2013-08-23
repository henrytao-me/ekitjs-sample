var path = require('path');

module.exports = function(instance) {
	
	instance.sample.cIndex = instance.base.controller.extend({
		'*': function(req, res, next){
			res.render(path.join(__dirname, '..', 'static', 'view', 'index'), {
				css: def.asset.renderTags('css'),
				js: def.asset.renderTags('js')
			});			
		},
		'get://hellomoto': function(req, res, next){
			res.send('hellomoto');
		},
		'get://hellomoto/:hi': function(req, res, next){
			res.send(req.params.hi);
		}
	});
};
