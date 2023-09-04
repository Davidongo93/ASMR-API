const { Sound } = require('../db');

const soundsByCategory = async (category) => {
	const response = await Sound.find({ category });
	return response;
};

module.exports = soundsByCategory;
