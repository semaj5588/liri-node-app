// Setting up node packages
var liri = require ('./keys.js');
var fs = require ('fs');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('spotify');
var params = process.argv.slice(2);

// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })
console.log("working");

// exports.liri = {
// 	tweet: "my-tweets", 
// 	spotify: "spotify-this-song",
// 	movie: "movie-this", 
// 	command: "do-what-it-says"
// };

// Twitter Part
var getTweets = function(){
	var client = new Twitter(liri.twitterKeys);
	var params = {screen_name: 'semajk58'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
  			if (!error) {
  				console.log("these are my tweets");
    			console.log(tweets);
  }

});
}
getTweets();

// Spotify part
function spotifyIt() {
Spotify.search({ type: 'track', query: params[1] }, function(err, data) {
  if ( err ) {
      console.log('Error occurred: ' + err);
      return;  
  }
  else{
  var songInfo = data.tracks.items[0];
  console.log("the artist is", songInfo.artists[0].name);
  console.log("the song name is", songInfo.name);
  console.log("the album is called", songInfo.album.name);
  console.log("here is a preview link", songInfo.preview_url);
  };
});
}

spotifyIt();
