const typeaheadController = require('../controllers/typeaheadController');

const typeaheadHandler = async (req, res) => {
  try {
    const searchTerm = req.query.q; 
console.log("searchterm",searchTerm);
    const suggestions = await typeaheadController(searchTerm);

    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ error: 'Error rendering suggestions' });
  }
};

module.exports = typeaheadHandler;
