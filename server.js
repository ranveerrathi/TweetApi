var spawn = require('child_process').exec;
spawn('twitter-proxy');
var twitApi = require('./app');
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./layout_settings');
  localStorage.setItem('layoutSetting','{"fontSizeText":"","fontSizeLink":"","fontFamily":"","makeschool":[{"tweetCount":"30","tweetStart":"","tweetEnd":""}],"ycombinator":[{"tweetCount":"30","tweetStart":"","tweetEnd":""}],"newsycombinator":[{"tweetCount":"30","tweetStart":"","tweetEnd":""}]}');
}
console.log('Server running on http://localhost:8080');
console.log('Request the Twitter API using: http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=makeschool');

