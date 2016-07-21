var glob = require('glob');

global.define = function(){};
global.requirejs = function(){return function(){};};
global.requirejs.config = function(){};

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function list(basePath) {
	glob.sync(basePath).forEach(function(path) {
		if (basePath != path) {
			if (endsWith(path, ".js")) {
				console.log("Found: " + path);
				try {
					require(path);//the file itself might error, but we don't mind here
				} catch (err) {
					console.log(err);
				}
			} else {
				list(path);
			}
		}
	});
}


module.exports = list
