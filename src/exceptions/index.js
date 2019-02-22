import BaseException from './baseException';

class UserError extends BaseException {
  constructor(message, status) {
    super(message || 'User Error', status || 500);
  }
}

class CarError extends BaseException {
  constructor(message, status) {
    super(message || 'Car Error', status || 500);
  }
}

export { UserError, CarError };
