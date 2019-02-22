
import express from 'express';
import UserController from './userController';
import middleware from '../../middleware';

const userRouter = express.Router();
const { userValidator: { postUser, putUser }, getValidationResults } = middleware;

// Write middleware for authentication

userRouter.get('/users/:userId', UserController.getUser);
userRouter.get('/users', UserController.getUsers);
userRouter.post('/users', postUser, getValidationResults, UserController.createUser);
userRouter.put('/users/:userId', putUser, getValidationResults, UserController.updateUser);
userRouter.delete('/users/:userId', UserController.deleteUser);

module.exports = userRouter;
