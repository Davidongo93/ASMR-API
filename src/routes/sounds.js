const { Router } = require('express');
const getSoundsAPIhandler = require('../handlers/getSoundsAPI');
const byCategoryHandler = require('../handlers/soundsByCategory');
const typeaheadHandler = require('../handlers/tyeaheadHandler');
const soundRouter = Router();

// Ruta GET para /sounds
soundRouter.get('/asmr', getSoundsAPIhandler);
soundRouter.get('/category/:category', byCategoryHandler);
soundRouter.get('/typeahead', typeaheadHandler);

module.exports = soundRouter;
