var path = require("path");

//Routing

module.exports = function(app) {
// HTML GET Requests for user visiting page
   
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
// Default to home
    
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
  
