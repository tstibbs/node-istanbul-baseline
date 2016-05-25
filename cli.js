var cover = require('./index.js')
var path = require('path')

var file = process.argv[3];

var absolutePath = path.resolve('.', file);

cover(absolutePath);
