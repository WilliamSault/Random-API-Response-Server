var express = require('express');
var handler = require('./implementation.js');
var app = express();


var api = new handler();

const PORT = 8080;
const HOST = '0.0.0.0';



app.get('/', function (req, res) {
    api.root(res);
});

app.get('/code/:code/random', function (req, res) {
    api.randomTime(req,res);
});

app.get('/code/:code/random/time-range/:minTime-:maxTime', function (req, res) {
    api.randomTimeRange(req,res);    
});

app.get('/Code/:code/response-time/:time',function(req,res){
    api.fixedTime(req,res);
});


var server = app.listen(PORT, HOST, function () {
    console.log(`Running on http://${HOST}:${PORT}`);
});