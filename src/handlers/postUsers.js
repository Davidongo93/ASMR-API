const postUsers = require ('../controllers/postUsers')
const postUsersHandler = async (req, res) => {
	try {
		const response = await postUsers();
		res.status(200).send(response);
	} catch (error) {
		res.status(422).send({ error: error.message });
	}
};

module.exports = postUsersHandler;
