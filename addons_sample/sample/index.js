exports.config = {
	name: 'sample',
	version: '1.0',
	author: 'Henry Tao',
	contact: 'hi@henrytao.me',
	wesite: 'http://linkedin.com/in/henrytao',
	description: '',
	category: '',

	depends: [],

	css: [
		'http://../static/css/css.css',
	],
	js: [
		'http://../static/lib/jquery-2.0.3.min.js',
		'static/js/js.js',
	],
	
	model: ['controller/index', 'model/index'],
	
	sequence: 10,
	auto_install: true
};

