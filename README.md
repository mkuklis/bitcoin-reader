# btcreader (WIP)

btcreader is an attempt to aggregate bitcoin prices from various markets and share them via socket.io.

## Install

    $ npm install -g btcreader
    
## Run

     $ btcreader

By default btcreader will run on port 8080.

## Supported Markets

* [BTCe](https://btc-e.com)
* [MtGox](http://mtgox.com‎)


## Data 

Markets return data in different formats. Bitcoin Reader is trying to normalize it to a common structure:

````js
{ market1: { currency1: { buy: value, sell: value }, ... }}
````

For example:

````js
{
  mtgox: {
    btc_usd: { buy: 834, sell: 833.9 }
  }
},
{ 
  btce: {
    ltc_usd: { buy: 24.33994, sell: 24.26698 },
    btc_usd: { buy: 834, sell: 833.9 }
  }
}
````
## Client

Clients can bind to `data` event in order to receive market data:

````js
var socket = io.connect('URL');
socket.on('data', function (data) {
  // do someting with received data
});

```` 

## Demo

[Client Demo](https://dl.dropboxusercontent.com/u/1250820/btcreader-client/index.html)

![btcreader](http://oi39.tinypic.com/axu8k.jpg)

