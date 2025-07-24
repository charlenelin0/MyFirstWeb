// routes/users.js（只做 URL 對應）

const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/userController');

// URL 對應 controller 裡的處理函式
router.get('/:id', userController.findUser);
router.post('/', userController.addUser);

module.exports = router;