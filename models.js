var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
	email: String,
	content: String,
	created: { type: Date, default: Date.now }
});

var message = mongoose.model('message',messageSchema);
exports.messageModel = message;
