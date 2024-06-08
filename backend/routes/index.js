const express = require('express');
const app = express();

const userRouter = require('./user');
const accountRouter  = require('./accounts');

const router = express.Router();

router.use('/user', userRouter);
router.use('/accounts', accountRouter);


module.exports = router;