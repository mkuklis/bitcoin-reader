var Market = require('./market');
var util = require('util');

function MtGox() {
  Market.apply(this, arguments);
}

util.inherits(MtGox, Market);

MtGox.prototype.parse = function (data) {
  if (!data || !data.length) return;

  var results = {};

  for (var i = 0, l = data.length; i < l; i++) {
    var val = data[i].data;
    var key = getKey(val.last.currency);
  
    results[key] = {
      buy: parseFloat(val.buy.value),
      sell: parseFloat(val.sell.value)
    };
  }

  return { mtgox: results };
}

module.exports = MtGox;


function getKey(val) {
  return 'btc_' + val.toLowerCase();
}