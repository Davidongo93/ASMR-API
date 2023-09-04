const soundsByCategory = require('../controllers/soundsByCategory');
const byCategoryHandler = async (req, res) => {
	try {
		const { category } = req.params;
		const response = await soundsByCategory(category);
		res.status(200).send(response);
	} catch (error) {
		res.status(422).send({ error: error.message });
	}
};

module.exports = byCategoryHandler;
