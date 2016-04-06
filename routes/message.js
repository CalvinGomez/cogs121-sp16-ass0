var mongoose = require('mongoose');
var models = require('../models');

exports.send = function(req,res) {
	var email = req.body.email;
	var content = req.body.content;
	var formData = new models.messageModel({
	  	email: email,
		content: content
	});

	formData.save(function(err, formData) {
		if (err)
			throw err;
		else
			res.redirect("/");
	});
}