var config = {
	markets: {
		btce: {
			url: 'https://btc-e.com/api/3/ticker/',
			currencies: ['btc_usd', 'ltc_usd'],
			delay: 5000 // 5 sec
		},
		mtgox: {
			url: 'http://data.mtgox.com/api/2/',
			suffix: '/money/ticker_fast',
			currencies: ['BTCUSD'],
			delay: 5000
		}
	}
};

module.exports = config;