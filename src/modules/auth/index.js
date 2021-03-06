
import express from 'express';
import UserController from './userController';
import middleware from '../../middleware';

const userRouter = express.Router();
const { userValidator, getValidationResults } = middleware;

userRouter.get('/users/:userId', UserController.getUser);
userRouter.get('/users', UserController.getUsers);
userRouter.post('/users', userValidator, getValidationResults, UserController.createUser);
userRouter.put('/users/:userId', userValidator, getValidationResults, UserController.updateUser);
userRouter.delete('/users/:userId', UserController.deleteUser);

module.exports = userRouter;
