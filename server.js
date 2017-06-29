var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var db;

var app = express();
var PORT = process.env.PORT || 3000;

mongoose.Promise = Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// mongoose.connect('mongodb://localhost/newsbucket');
mongoose.connect('mongodb://heroku_cdlj4pb3:vgcoaehiplkadh398br6nlml0f@ds135522.mlab.com:35522/heroku_cdlj4pb3');
db = mongoose.connection;

db.on('error', function (error) {
  console.log('Mongoose Error: ', error);
});

db.once('open', function () {
  console.log('Mongoose connection successful!');
});

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(3000, function () {
  console.log('App running on port 3000!');
});
