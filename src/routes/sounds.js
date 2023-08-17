const { Router } = require('express');
const getSoundsHandler = require('../handlers/getSounds');

const soundRouter = Router();

// Ruta GET para /sounds
soundRouter.get('/', getSoundsHandler);

module.exports = soundRouter;
