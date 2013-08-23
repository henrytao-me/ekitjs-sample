exports.config = {
	name: 'Prion Addon',
	version: '1.0',
	author: 'Henry Tao',
	contact: 'hungtaoquang@gmail.com',
	wesite: 'http://henrytao.com',
	description: '',
	category: '',

	depends: [],

	css: [
		'http://../static/lib/twittstrap/css/bootstrap.min.css',
		// 'static/css/css.css'
	],
	js: [
		'http://../static/lib/angular/angular.min.js',
		'http://../static/lib/bootstrap-gh-pages/ui-bootstrap-tpls-0.4.0.min.js',
		// 'static/js/app.js',
		// 'static/js/controllers.js',
		// 'static/js/directives.js',
		// 'static/js/filters.js',
		// 'static/js/services.js'
	],
	
	model: ['controller/index', 'model/index'],
	
	sequence: 10,
	auto_install: true
};

