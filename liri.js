//following step 2 on the homework... dude, I think I'm lost o_o'
require("dotenv").config();

//code required to import keys.js
var keys = require('./keys');


//supposedly I should be able to access my keys using these variables to a constructor
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log('there should be no errors...?');