const mongoose = require('mongoose');

const soundSchema = new mongoose.Schema({
	published_at: {
		type: Number,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	audio: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		default: 'asmr',
	},
	image: {
		type: String,
	},
});

const Sound = mongoose.model('Sound', soundSchema);

module.exports = Sound;
