import { body } from 'express-validator/check';

export default [
  body('firstName', 'FirstName is required').trim().not().isEmpty(),
  body('lastName', 'LastName is required').trim().not().isEmpty(),
  body('email', 'Email is required').trim().isEmail().withMessage('Invalid email')
    .not()
    .isEmpty(),
  body('gender', 'Gender is required').trim().isIn(['Male', 'Female']).withMessage('Gender can either be female or male')
    .not()
    .isEmpty(),
  body('dateOfBirth', 'Date of birth is required').trim().not().isAfter()
    .withMessage('Date of birth should be on an earlier date')
    .not()
    .isEmpty(),
  body('phoneNumber', 'Phone number is required').trim().isLength({ min: 10, max: 10 })
    .withMessage('Invalid phone number')
    .not()
    .isEmpty(),
  // Check for available jobs in the database
  body('job', 'Job is required').trim().not().isEmpty(),
];
