var fs = require('fs');
var path = require('path');

var replaceRpx = function (someFile) {
    fs.readFile(someFile, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/(\d+)rpx/g, function(match, p1) {
            return p1 / 2 + 'px'
        });
      
        fs.writeFile(someFile, result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });
}

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          replaceRpx(file)
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk(process.argv[2], () => {})