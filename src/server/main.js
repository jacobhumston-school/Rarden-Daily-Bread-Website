/**
 * Server side scripts managed and programmed by Jacob Humston.
 */

import express from 'express';
import mysql from 'mysql2/promise';
import { Account } from './database.js';
import fs from 'node:fs';

const database = await mysql.createConnection({
    host: 'localhost',
    user: 'websiteUSER',
    password: fs.readFileSync('.db-pass', 'utf-8'),
});

const accountDatabase = new Account(database);

console.log('Database connected...');

const app = express();

app.use('/', function (request, _, next) {
    // console.log(`Request ${request.method} for ${request.url}`);
    next();
});

app.use('/', express.static('src/client/', { extensions: ['html'] }));

app.listen(80, () => console.log('Server is listening on port 80!'));
