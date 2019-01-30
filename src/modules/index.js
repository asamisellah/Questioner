const userRouter = require('./users');

const baseUrl = '/api/v1';

const routes = (app) => {
  app.use(baseUrl, userRouter);
  return app;
};

module.exports = routes;
