module.exports = {
	'*': function(req, res, next){
		res.render(path.join(__dirname, '..', 'static', 'view', 'leaderboard'), {
			css: ekitjs.asset.renderTags('css'),
			js: ekitjs.asset.renderTags('js')
		});
	}
};
