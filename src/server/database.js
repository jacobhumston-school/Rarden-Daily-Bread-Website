/**
 * Server side scripts managed and programmed by Jacob Humston.
 */

/**
 * @typedef {Object} Account
 * @property {string} Username
 * @property {string} PasswordHash
 * @property {string[]} Permissions
 */

import * as bcrypt from 'bcrypt';
import * as db from 'node-json-db';

export class Account {
    constructor() {
        this.database = new db.JsonDB(new db.Config('db/accounts.json', true, '/'));
        this.database.load();
    }

    async getAccounts() {}
}
