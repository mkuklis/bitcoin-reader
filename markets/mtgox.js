var Market = require('./market');
var util = require('util');

function MtGox() {
  Market.apply(this, arguments);
}

util.inherits(MtGox, Market);

MtGox.prototype.parse = function (data) {
  if (!data || !data.length) return;

  var results = [];

  for (var i = 0, l = data.length; i < l; i++) {
    var result = {};
    var val = data[i].data;
    var key = getKey(val.last.currency);
  
    result[key] = {
      buy: val.buy.value,
      sell: val.sell.value
    };

    results.push(result);
  }

  return { mtgox: results };
}

module.exports = MtGox;


function getKey(val) {
  return 'btc_' + val.toLowerCase();
}