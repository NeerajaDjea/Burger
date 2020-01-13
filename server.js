var connection = require("./config/connection");
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controller")
var app = express();
var methride = require("method-override");

// use the routes
app.use(routes)
    // for deploying on heroku
var PORT = process.env.PORT || 3308;
//  bodyParser for the urlencoded and json

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// set up handlebars for layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log("server listening on http://localhost" + PORT);

});