const { Router } = require('express');
const getSoundsAPIhandler = require('../handlers/getSoundsAPI');

const soundRouter = Router();

// Ruta GET para /sounds
soundRouter.get('/API', getSoundsAPIhandler);
soundRouter.get('/db', getSoundsAPIhandler);

module.exports = soundRouter;
