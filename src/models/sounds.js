const mongoose = require('mongoose');

const soundSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	url: {
		type: String,
		required: true,
		trim: true,
	},
});

const Sound = mongoose.model('Sound', soundSchema);

module.exports = Sound;
