/**
 * Server side scripts managed and programmed by Jacob Humston.
 */

import express from 'express';
import { Account } from './database.js';

const accountDatabase = new Account();

const app = express();

app.use('/', function (request, _, next) {
    // console.log(`Request ${request.method} for ${request.url}`);
    next();
});

app.use('/', express.static('src/client/', { extensions: ['html'] }));

app.listen(80, () => console.log('Server is listening on port 80!'));
