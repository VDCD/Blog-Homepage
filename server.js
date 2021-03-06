var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('./tools/logger');

var app = express();

//Middlewares
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

//Routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Server Start
app.listen(process.env.PORT || 3000, function(req, res){
  if(process.env.PORT){
    console.log('API is running on port '+process.env.PORT);
  }else{
    console.log('API is running on port 3000');
  }
});
