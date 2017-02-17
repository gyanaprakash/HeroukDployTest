var fs = require('fs');
var chlk = require('chalk');
var http = require('express')();
var bodyParser = require('body-parser');

// http.use(express.static(__dirname + "/public"));
http.use(bodyParser.json());
http.use(bodyParser.urlencoded({extended:false}));


http.get('/', function(req, res) {
	res.send('hello gyan please set the root directory');
});

http.get('/aboutUs', function(req, res) {
	res.send('hello gyan here is your aboutUs page');
});

http.get('/home', function(req, res) {

	res.send("hello gyan here is your home page" + "\n" + req.query.name);
});

var port = process.env.PORT || 3000;

http.listen(port, function(){
		console.log("Server running on port 3000");
});