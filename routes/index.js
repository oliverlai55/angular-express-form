var express = require('express');
var router = express.Router();
var Terms = require('../models/terms');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

//Create a router for /search, so Angular can hit it.
// router.post('/search', function(req, res, next){
// 	res.json('success');
// });

router.post('/search', function(req, res, next){
	// var searchTerms = ['peter','stuart','stephen','griffin','oliver','freddy'];
	var keywords = req.body.data.toLowerCase();

	Terms.find({}, function(err, doc, next){
		var matches = "";
		console.log(doc[0].word);
		for(i=0; i<doc.length; i++){
			var currWord = doc[i].word.toLowerCase();
			if(currWord.indexOf(keywords) > -1){
				matches += currWord + ',';
			}
		}
		res.json(matches);
	});

	

});
module.exports = router;
