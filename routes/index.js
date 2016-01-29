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
	var keywords = req.body.data;

	var matches = "";
	for(i=0; i<searchTerms.length; i++){
		if(searchTerms[i].indexOf(keywords) > -1){
			matches += searchTerms[i] + ',';
		}
	}
	res.json(matches);
});
module.exports = router;
