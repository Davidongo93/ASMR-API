// typeaheadController.js
const { Client } = require('podcast-api');
const { API_KEY } = process.env;

const typeaheadController = async (searchTerm) => {
  try {
    const client = Client({
      apiKey: API_KEY || null,
    });

    const response = await client.typeahead({ q: searchTerm, show_podcasts: 1 });

    const suggestions = response.data;

    return suggestions;
  } catch (error) {
    throw new Error('Error rendering suggestions?');
  }
};

module.exports = typeaheadController;
