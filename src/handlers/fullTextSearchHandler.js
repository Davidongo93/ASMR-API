
const fullTextSearchController = require('../controllers/fullTextSearchController');

const fullTextSearchHandler = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    console.log("searchterm", searchTerm);

    const results = await fullTextSearchController(searchTerm);

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error rendering search results' });
  }
};

module.exports = fullTextSearchHandler;
