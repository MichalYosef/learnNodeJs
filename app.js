var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// middleware (should come befoew the routes)
/*
var logger = function(req, res, next){
    console.log('logging...');
    next();
}
app.use(logger);
*/
// View engine
/* Error: No default engine was specified and no extension was provided.

app.set('View engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
*/
// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path (for css files, jquery, angular etc...)
app.use( express.static( path.join(__dirname, 'public')));
/*
var person = {
    name: 'Jeff',
    age: 30
}*/

// routes

app.get('/', function(req, res){
    res.sendfile(path.join(__dirname, 'views/index.html'));
    // res.send('Hello there');
    // res.json(person);
    // res.render('index'); GETTING ERROR

});

// initialize server to listen for requests

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});