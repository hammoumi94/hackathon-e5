/* eslint-disable no-console */
const app = require('./config/express');

console.time('app-start');

const server = app.listen(5000, () => {
  console.info('--- Started ---');
  console.timeEnd('app-start');
});

module.exports = server;
