import { validationResult } from 'express-validator/check';
import userValidator from './userValidator';
import Utils from '../utils';

const getValidationResults = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return Utils.getFailureResponse(res, errors.array(), 422);
  }
  return next();
};

export default {
  userValidator,
  getValidationResults,
};
