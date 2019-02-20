import { validationResult } from 'express-validator/check';
import userValidator from './userValidator';

const getValidationResults = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

export default {
  userValidator,
  getValidationResults,
};
