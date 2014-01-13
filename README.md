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
{ market: [{ currency: { buy: value, sell: value }} ]}
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