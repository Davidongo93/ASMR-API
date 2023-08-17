const getSounds = require('../controllers/getSounds');
const getSoundsHandler = async (req, res) => {
	try {
		const response = await getSounds();
		res.status(200).send(response);
	} catch (error) {
		res.status(422).send({ error: error.message });
	}
};

module.exports = getSoundsHandler;
