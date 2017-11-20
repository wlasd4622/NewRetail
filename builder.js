//https://github.com/nwjs-community/nw-builder
var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
	files: './client/resources/**', // use the glob format
	platforms: ['win32'],
	buildDir: './client/config/dist',
	cacheDir: './client/config/sdk',
	winIco: './client/resources/assets/images/logo.ico',
	version: '0.25.0'
});

//Log stuff you want

nw.on('log', console.log);

// Build returns a promise
nw.build().then(function() {
	console.log('all done!');
}).catch(function(error) {
	console.error(error);
});