import express from 'express';
import debug from 'debug';
import modules from './modules';

const app = express();
const port = 3000;

const logger = debug('log');
modules(app);

app.listen(port, () => logger(`Listening on port http://localhost:${port}`));
