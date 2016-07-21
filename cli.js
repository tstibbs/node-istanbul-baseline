var cover = require('./index.js')
var path = require('path')
var fs = require('fs');

var packageJson = JSON.parse(fs.readFileSync('./package.json').toString());
if (packageJson.config == undefined || packageJson.config.istanbul_baseline == undefined || packageJson.config.istanbul_baseline.path == undefined) {
	throw 'Usage: the calling module\'s package.json should contain a section like this:\n    config: {\n        istanbul_baseline: {\n            path: "./js/*"\n        }\n    }';
}
var file = packageJson.config.istanbul_baseline.path;

var absolutePath = path.resolve('.', file);

describe('dummy test to load everything', function() {
	it('should require every file', function() {
		cover(absolutePath);
	});
});
