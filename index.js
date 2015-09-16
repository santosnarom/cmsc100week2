//How to NodeJS

//requires said module
var express = require('express');
//creates an instance of the said module
var app = express();

//Basic Routing
/*app.route('/', function(req,res){
	res.send('Hello Handsome!');
});

app.get('/students', function(req,res){
	res.send('Hello Students!');
});*/

app.use(require('body-parser')());
app.use(require('method-override')());
app.use(require(__dirname+'/config/router')(express.Router()));
app.use(express.static(__dirname + '/public'));

//listens to the request
var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});