import express from 'express';
import UserController from './userController';

const userRouter = express.Router();

userRouter.get('/users/:userId', UserController.getUser);
userRouter.get('/users', UserController.getUsers);
userRouter.post('/users', UserController.createUser);
userRouter.put('/users/:userId', UserController.updateUser);
userRouter.delete('/users/:userId', UserController.deleteUser);

module.exports = userRouter;
