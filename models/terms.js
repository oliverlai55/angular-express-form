var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Terms = require('../models/terms');

var Terms = new Schema({
	word: String
});

module.exports = mongoose.model('Terms', Terms);