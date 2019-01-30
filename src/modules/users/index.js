const express = require('express');
const UserController = require('./userController');

const userRouter = express.Router();

userRouter.get('/user', UserController.getUser);

module.exports = userRouter;
