/**
 * Server side scripts managed and programmed by Jacob Humston.
 */

/**
 * @typedef {Object} Account
 * @property {string} Username
 * @property {string} PasswordHash
 * @property {string[]} Permissions
 */

import mysql from 'mysql2/promise';
import 'bcrypt';

export class Account {
    /**
     * @param {mysql.Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    async getAccounts() {

    }
}
