var mongoose = require('mongoose');
var models = require('../models');
var moment = require('moment');

exports.send = function(req,res) {
	var email = req.body.email;
	var content = req.body.content;
	var formData = new models.messageModel({
	  	email: email,
		content: content
		// created: "04-24-2016"
	});

	formData.save(function(err, formData) {
		if (err)
			throw err;
		else
			res.redirect("/");
	});
}