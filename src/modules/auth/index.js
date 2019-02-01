import express from 'express';
import UserController from './userController';
import middleware from '../../middleware';

const userRouter = express.Router();
const { userValidator } = middleware;
console.log(typeof userValidator);


userRouter.get('/users/:userId', UserController.getUser);
userRouter.get('/users', UserController.getUsers);
userRouter.post('/users', userValidator, UserController.createUser);
userRouter.put('/users/:userId', UserController.updateUser);
userRouter.delete('/users/:userId', UserController.deleteUser);

module.exports = userRouter;
