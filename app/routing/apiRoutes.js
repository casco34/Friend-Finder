//Load Data

var friendsData = require("../data/friends");

//Routing

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

// API POST Requests
//****Enter compatibility logic for survey reults see readme

app.post("/api/friends", function (req, res) {
  
    var match = {
      name: "",
      photo: "",
      bestDiff: 1000
    };

    //console.log(req.body);

        var user = req.body;
        var score = user.Scores;
        var theDifference;
//console.log("friendsData")

        for (var i = 0; i < friendsData.length; i++) {
          //  console.log(friendsData[i]);
            theDiffference = 0;

            for (var j = 0; j < score.length; j++) {
            theDifference += Math.abs(score[j] - friendsData[i].scores[j]);
//console.log("submitted score ", score[i])
//console.log("friend score", friendsData[i].score[j])
            if (theDifference <= match.difference) {
                match.name = friendsData[i].name;
                match.photo = friendsData[i].photo;
                match.difference = theDifference;
            }
            }
        }
        friendsData.push(user);
        res.json(match);


    });
  };
