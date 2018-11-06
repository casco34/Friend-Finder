var express = require("express");
var bodyParser = require("body-parser");


//express

var app = express();

// Sets port to Heroku

var PORT = process.env.PORT || 8080;

// Data Parsing

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routing

var friendsData = require("./app/data/friends.js");
require("./app/routing/apiRoutes")(app, friendsData);
require("./app/routing/htmlRoutes")(app);


//Start Server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
