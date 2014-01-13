var async = require('async');
var events = require('events');
var utils = require('../lib/utils');
var util = require("util");

function Market(options) {
  var suffix = options.suffix || '';

  this.delay = options.delay || 5000;
  this.endpoints = options.currencies.map(function (currency) {
    return utils.fetch(options.url + currency + suffix);
  });

  events.EventEmitter.call(this);
}

util.inherits(Market, events.EventEmitter);
module.exports = Market;

Market.prototype.start = function () {
  this.intervalId = setInterval(this.fetch.bind(this), this.delay);
}

Market.prototype.stop = function () {
  clearInterval(this.intervalId);
}

Market.prototype.fetch = function () {
  async.parallel(this.endpoints, function (err, data) {
    this.emit('data', this.parse(data));
  }.bind(this));
}

Market.prototype.parse = function (data) {
  return data;
}