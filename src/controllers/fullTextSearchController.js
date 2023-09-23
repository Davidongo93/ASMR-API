
const { Sound } = require('../db');

const fullTextSearchController = async (searchTerm) => {
const results = await Sound.find({ title: { $regex: new RegExp(searchTerm, 'i') } });

    return results; 
};

module.exports = fullTextSearchController;
