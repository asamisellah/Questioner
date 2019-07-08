import userRouter from './user';

const baseUrl = '/api/v1';

const routes = (app) => {
  app.use(baseUrl, userRouter);
  return app;
};

module.exports = routes;
