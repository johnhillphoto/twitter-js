var express = require('express');
var swig = require('swig');
var routes = require('./routes');

var app = express();



app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);


app.use(express.static(__dirname + '/public'));

app.use('/', routes);

/*
var locals = {
    title: 'People from fantasylands',
    people: [
        {name: 'Dan'},
        {name: 'John'},
        {name: 'Luke'}
    ],
    pets: [
        {breed: 'Cat'},
        {breed: 'Amphibian'},
        {breed: 'Dog'},
        {breed: 'Lynx'},
        {breed: 'Rat'},
    ]
}


app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });


app.use("/special", function(req, res, next) {
    res.send("you reached the special area"); 
});

app.use(function(req, res, next) {
    console.log(req.method, req.url, res.statusCode); 
});

app.get('/', function(req, res) {
    res.render('index', locals);
});

app.get('/news', function(req, res) {
    res.send('This is your nightly news!');
});

*/

app.listen(process.env.PORT, function(){
    console.log("We have a server running!");
});