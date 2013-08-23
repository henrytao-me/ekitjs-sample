var path = require('path');

module.exports = function(instance) {
	instance.sample.cIndex = instance.base.controller.extend({
		'*': function(req, res, next){
			res.render(path.join(__dirname, '..', 'static', 'view', 'index'), {
				css: instance._config.asset.renderTags('css'),
				js: instance._config.asset.renderTags('js')
			});
		}
	});
};
