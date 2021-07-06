const knex = require('knex');
const dbConfig = require('./knex');

const db = knex(dbConfig);

module.exports = db;
