import { body } from 'express-validator/check';

export default {
  postUser: [
    body('name', 'Name is required').trim().not().isEmpty(),
    body('email', 'Email is required').trim().isEmail().withMessage('Invalid email')
      .not()
      .isEmpty(),
    body('gender', 'Gender is required').trim().isIn(['Male', 'Female']).withMessage('Gender should be either Female or Male')
      .not()
      .isEmpty(),
    // Check for available jobs in the database
    body('occupation', 'Occupation is required').trim().not().isEmpty(),
    body('password', 'Password is required').trim().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).withMessage('Password should have a minimum of eight characters, at least one letter, one number and one special character')
      .not()
      .isEmpty(),
  ],
  putUser: [
    body('name', 'Name is required').trim().not().isEmpty(),
    body('email', 'Email is required').trim().isEmail().withMessage('Invalid email')
      .not()
      .isEmpty(),
    body('gender', 'Gender is required').trim().isIn(['Male', 'Female']).withMessage('Gender should be either Female or Male')
      .not()
      .isEmpty(),
    // Check for available jobs in the database
    body('occupation', 'Occupation is required').trim().not().isEmpty(),
  ],
};
