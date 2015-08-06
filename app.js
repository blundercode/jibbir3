// // The main application script, ties everything together.
// var express = require('express');
// var app = module.exports = express();

// //configure express app
// app.configure(function(){
//   app.use(express.bodyParser());
//   app.use(app.router);
// });


// //set the route for the static content
// app.use(express.static(__dirname + '/web-app'));
// //start the server on the port
// app.listen(process.env.PORT || 8080);
// console.log("Express server listening on port %d", process.env.PORT || 8080);

var express = require("express");
var app = express();

app.use(express.static("app"));

app.get("/", function (req, res) {
   res.sendFile('index.html' , { root: 'web-app' });
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
   console.log("Listening on " + port);
});