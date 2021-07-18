const express = require('express');
const router = express.Router();

// router.? tu userController

const UserController = require('../controller/userController');

router.post('/signup', UserController.user_signup);

router.post('/login', UserController.user_login);

router.delete('/delete/:userId', UserController.user_delete);

module.exports = router;