const router = require('express').Router();

const apiPostRouter = require('./api/post');

router.use('/posts', apiPostRouter);

module.exports = router
