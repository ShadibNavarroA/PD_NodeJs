const express = require('express');
const router = express.Router();
const userController = require('./users.routes');

router.get('/get', userController.get);
router.post('/post', userController.login);

module.exports = router;