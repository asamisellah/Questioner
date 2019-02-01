import express from 'express';
import debug from 'debug';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import modules from './modules';
import db from './database/models';

const app = express();
const port = 3000;

// parses incoming request body
app.use(bodyParser.json());

// Log requests to the console
app.use(morgan('dev'));

// Debug logger
const logger = debug('log');

// set base URL and routes
modules(app);

// Catch all routes
app.use('*', (req, res) => res.status(400).json({
  success: false, message: 'URL not found. Use /api/v1 to access the Api',
}));

// // Database connection
// db.sync({
//   logging: console.log,
// });


// Listen to port
app.listen(port, () => logger(`Listening on port http://localhost:${port}`));
