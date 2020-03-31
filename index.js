var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(["Miller","Eli","Andrew","Villager","Food"]);
});
// this gets the callback fromt he client
var axios = require('axios');
//this is the key from discogs oauth
//var mykey = config.MY_KEY;

axios.get("http://api.discogs.com/users/k.miller/collection/folders/0/releases?per_page=200").then(
  function(response) {
      //console.log(response);
      
      var results = response.data.releases;
      for (var i = 0; i < results.length; i++) {
              //console.log("Testing..." + results[i].basic_information.artists[0].name
              console.log("Artist: " + results[i].basic_information.artists[0].name +
                            "\nAlbum: " + results[i].basic_information.title +
                            "\nYear: " + results[i].basic_information.year + "\n"
          );
      }
  }
);
app.get("/records", (req, res, next) => {
    res.json.results;
});


app.listen(3000, () => {
    console.log("Server running on port 3000" + "\n");
});