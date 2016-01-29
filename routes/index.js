var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Create a router for /search, so Angular can hit it.
// router.post('/search', function(req, res, next){
// 	res.json('success');
// });

router.post('/search', function(req, res, next){
	var searchTerms = ['peter','stuart','stephen','griffin','oliver','freddy'];
	req.body
	res.json(searchTerms);
});
module.exports = router;
