var express = require('express');
var app = express();
var twitApi = require('./tweet-api');
var LocalStorage = require('node-localstorage').LocalStorage;
var path = require('path');
app.set('views', __dirname);
app.use(require('connect').bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.get('/fetch-tweet', function (req, res) {
    twitApi.get_user_timeline(req.query.count,req.query.screen_name,function(data){
            res.send(data);
    }); 
})
app.post('/save-setting', function (req, res) {
    console.log(JSON.stringify(req.body));
    localStorage.setItem('layoutSetting',JSON.stringify(req.body));
    console.log(localStorage.getItem('layoutSetting'));
   
})
app.get('/save-setting', function (req, res) {    
    res.send(localStorage.getItem('layoutSetting'));
   
})
app.get('/', function (req, res) {    
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/editlayout', function (req, res) {    
    res.sendFile(path.join(__dirname + '/edit-layout.html'));
})
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})