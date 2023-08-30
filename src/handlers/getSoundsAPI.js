const soundsDB = require('../controllers/getSoundsAPI');
// const getSoundsAPI = require('../controllers/getSoundsAPI');
const getSoundsAPIhandler = async (req, res) => {
	try {
		// const response = await getSoundsAPI();
		const response = await soundsDB();
		res.status(200).send(response);
	} catch (error) {
		res.status(422).send({ error: error.message });
	}
};

module.exports = getSoundsAPIhandler;
