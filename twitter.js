var Twit = require('twit')
var config = require('./config.js')
console.log(config)

var Twitter = new Twit(config)
var params = {
	screen_name: '@realDonaldTrump',
	count: 50
}

Twitter.get('statuses/user_timeline', params, function(err, data, response) {
  console.log(data)
})
