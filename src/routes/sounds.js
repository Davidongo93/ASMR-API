const { Router } = require('express');
const getSoundsAPIhandler = require('../handlers/getSoundsAPI');
const byCategoryHandler = require('../handlers/soundsByCategory');
const typeaheadHandler = require('../handlers/typeaheadHandler');
const fullTextSearchHandler = require('../handlers/fullTextSearchHandler.js');
const soundRouter = Router();

// Ruta GET para /sounds
soundRouter.get('/asmr', getSoundsAPIhandler);
soundRouter.get('/category/:category', byCategoryHandler);
soundRouter.get('/typeahead', typeaheadHandler);
soundRouter.get('/fulltext', fullTextSearchHandler);

module.exports = soundRouter;
