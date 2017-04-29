var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var newApp = express();

var port = process.env.PORT || 8030;

newApp.use(express.static(__dirname));
newApp.use(bodyParser.urlencoded({ extended: false }));

newApp.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(newApp);
require('./app/routing/htmlRoutes.js')(newApp);


newApp.listen(port, function() {
  console.log("listening on port#: " + port);
});