const { Router } = require('express');
const soundRouter = require('./sounds');

const router = Router();

router.use('/sounds', soundRouter);
// router.use('/users', userRouter);

module.exports = router;
