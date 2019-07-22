var express = require("express");
var app = express();

// sets the view engine to ejs
app.set("view engine", "ejs");

// our public folder that stores assets
app.use(express.static(__dirname + "/public"));

// routes for our app
app.get("/", function(req, res) {
  res.render("pad");
});

//listen on port 8000 or heroku port
var port = process.env.PORT || 8000;
app.listen(port);
