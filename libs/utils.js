var request = require('request');
var slice = [].slice;

exports.fetch = function (url) {
  return function (callback) {
    request.get(url, function (err, resp) {
      if (err || !resp || !resp.body) return callback(err, resp); 
      callback(err, JSON.parse(resp.body));
    });
  }
}

exports.proxy = function (event, src, dest) {
  src.on(event, function () {
    var args = [event].concat(slice.call(arguments));
    dest.emit.apply(dest, args);
  });
}