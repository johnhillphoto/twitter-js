var express = require('express');

var app = express();

app.use("/special", function(req, res, next) {
    res.send("you reached the special area"); 
});

app.use(function(req, res, next) {
    console.log(req.method, req.url, res.statusCode); 
});

app.get('/', function(req, res) {
    res.send('Handled get');
});

app.get('/news', function(req, res) {
    res.send('This is your nightly news!');
});

app.listen(process.env.PORT, function(){
    console.log("We have a server running!");
});