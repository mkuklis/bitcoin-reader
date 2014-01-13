var config = require('../config');
var events = require('events');
var utils = require('../lib/utils');

module.exports = init(config.markets);

function init(config) {
  var markets = load(config);
  var emitter = new events.EventEmitter();
  
  for (var key in markets) {
    var Market = markets[key];
    var market = new Market(config[key]);
    utils.proxy('data', market, emitter);
    market.start();
  }

  return emitter;
}

function load(config) {
  var markets = {};

  for (var key in config) {
    markets[key] = require('./' + key);
  }

  return markets;
}