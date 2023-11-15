// eslint-disable-next-line import/no-extraneous-dependencies
const ic = require('node-icecream')();

function extractNameFromTemplate(value) {
  // throw new Error('Not implemented');
  // return value.slice(7);
  return value.slice(7, value.length - 1);
}
ic(extractNameFromTemplate('Hello, World!'));
