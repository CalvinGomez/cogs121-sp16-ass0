var mongoose = require('mongoose');
var databaseModel = require('../models');

exports.view = function(req, res) {
	mongoose.model('message').find(function (err, data) {
		res.render('index', {
            "data" : data
        });
	});
}
