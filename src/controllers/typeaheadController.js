const { Sound } = require('../db');

const typeaheadController = async (searchTerm) => {
const suggestions = await Sound.find({ title: { $regex: searchTerm, $options: 'i' } }).limit(10);
console.log(suggestions);
    return suggestions;
};

module.exports = typeaheadController;
