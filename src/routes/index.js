const { Router } = require('express');
const soundRouter = require('./sounds');
const userRouter = require('./users');

const router = Router();

router.use('/sounds', soundRouter);
router.use('/users', userRouter);

module.exports = router;