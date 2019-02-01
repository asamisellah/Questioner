import express from 'express';
import debug from 'debug';
import bodyParser from 'body-parser';
import modules from './controllers';

const app = express();
const port = 3000;

// parses incoming request body
app.use(bodyParser.json());

const logger = debug('log');

// set base URL and routes
modules(app);

// Catch all routes
app.use('*', (req, res) => res.status(400).json({
  success: false, message: 'URL not found. Use /api/v1 to access the Api',
}));

// Listen to port
app.listen(port, () => logger(`Listening on port http://localhost:${port}`));
