const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes');
const morgan = require('morgan');
const logger = morgan('dev');
const nunjucks = require('nunjucks');
const models = require('./models');

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
var env = nunjucks.configure('views', {noCache: true});


app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));

// Route
app.use('/', router);


// models.User.sync({})
// .then(function() {
// 	return models.Page.sync({})
// })
// .then(function() {
// 	app.listen(3000, function() {
// 	console.log('Listening on port 3000');
// 	});
// })
// .catch(console.error);

models.db.sync({})
.then(function () {
    // make sure to replace the name below with your express app
	app.listen(3000, function() {
	console.log('Listening on port 3000');
	});
})
.catch(console.error);