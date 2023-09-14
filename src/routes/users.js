const { Router } = require('express');
const postUserHandler = require('../handlers/postUsers')

const usersRouter = Router();

usersRouter.post('/', postUserHandler);

module.exports = usersRouter;
