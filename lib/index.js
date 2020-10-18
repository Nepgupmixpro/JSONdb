const fs = require('fs')

var databaseName;

exports.create = function(filename) {
  databaseName = filename;
  if (fs.existsSync(`${filename}.json`) != true) {
    fs.open(filename+'.json', 'w', function(err, f){});
    fs.writeFile(`${filename}.json`)
  }
}

exports.createDB = function(name) {

}

exports.addToDB = function(data, location) {

}

exports.createLocation = function(name, location) {
}
