import express from 'express';
import debug from 'debug';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import expressValidator from 'express-validator';
import dotenv from 'dotenv/config'; // Enable app to read .env file
import modules from './modules';
import db from './database/models';

const port = process.env.PORT;

// Create app instance
const app = express();

// parses incoming request body
app.use(bodyParser.json());

// Log requests to the console
app.use(morgan('dev'));

// Express Validator
app.use(expressValidator());

// Debug logger
const logger = debug('log');

// set base URL and routes
modules(app);

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Catch all routes
app.use('*', (req, res) => res.status(400).json({
  success: false, message: 'URL not found. Use /api/v1 to access the Api',
}));

// Listen to port
app.listen(port, () => logger(`Listening on port http://localhost:${port}`));
