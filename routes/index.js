const express = require('express');
const wikiRouter = require('./wiki')
const router = express.Router();
const userRouter = require('./user')

router.get('/', function(req, res) {
	res.render('index.html');
});

router.use('/wiki', wikiRouter)

module.exports = router;
