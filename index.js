var glob = require('glob');

global.define = function(){};
global.requirejs = function(){return function(){};};
global.requirejs.config = function(){};

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function list(path1) {
	console.log("Glob: " + path1)
	//TODO get rid of glob, it's nothing but trouble
	glob.sync(path1).forEach(function(path) {
		console.log("???: " + path);
		if (path1 != path) {
			if (endsWith(path, ".js")) {
				console.log("REQ: " + path);
				require(path);
			} else {
				console.log("REC: " + path);
				list(path);
			}
			console.log(" ");
		}
	});
}

module.exports = list
