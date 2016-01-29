var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Create a router for /search, so Angular can hit it.
route.post('/search', function(req, res, next){
	res.json('success');
})

module.exports = router;
