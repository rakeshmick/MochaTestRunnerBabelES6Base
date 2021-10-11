//this example is a small modification from mochajs website and their github repo
var fs require( 'fs')
var Mocha require( 'mocha')
var path require('path')

// Instantiate a Mocha instance in dryRun mode
var mocha = new Mocha({reporter:'list', dryRun: true});

var testDir = './test/';

// Add each .js file from folder to the mocha instance
fs.readdirSync(testDir).filter(function(file) {
    // Only pick the .js files
    return file.substr(-3) === '.js';

}).forEach(function(file) {
    mocha.addFile(
        path.join(testDir, file)
    );
});

mocha.run();
