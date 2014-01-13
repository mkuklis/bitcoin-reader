var Market = require('./market');
var util = require('util');

function Btce() {
  Market.apply(this, arguments);
}

util.inherits(Btce, Market);

Btce.prototype.parse = function (data) {
  if (!data || !data.length) return;

  var results = [];

  for (var i = 0, l = data.length; i < l; i++) {
    var result = {};
    var key = getKey(data[i]);
    var val = data[i][key];

    result[key] = {
      buy: val.buy,
      sell: val.sell
    };

    results.push(result);
  }
  
  return { btce: results };
}

module.exports = Btce;

// helpers

function getKey(obj) {
  for (key in obj) return key;
}