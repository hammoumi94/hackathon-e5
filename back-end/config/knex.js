const camelCase = require('camelcase');
const decamelize = require('decamelize');

const camelcaseOverloaded = (result) => {
  try {
    if (!result) {
      return result;
    }
    if (typeof result === 'string' || result instanceof String) {
      return camelCase(result);
    }
    if (result.constructor === Object || result.constructor.name === 'RowDataPacket') {
      const output = {};
      Object.entries(result).forEach(([key, value]) => {
        const camelcased = camelCase(key);
        output[camelcased] = value;
      });
      return output;
    }
    if (Array.isArray(result)) {
      const output = [];
      result.forEach((element) => {
        output.push(camelcaseOverloaded(element));
      });
      return output;
    }
    return result;
  } catch (error) {
    return result;
  }
};

module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: '',
    database: 'quizz',
  },
  postProcessResponse: camelcaseOverloaded,
  wrapIdentifier: (value, origImpl) => origImpl(decamelize(value)),
  debug: false,
};
