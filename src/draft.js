// eslint-disable-next-line import/no-extraneous-dependencies
const ic = require('node-icecream')();

function invertCase(str) {
  // throw new Error('Not implemented');
  let ans = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const world of str.split(' ')) {
    let newWorld = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const char of world) {
      if (char === char.toUpperCase()) {
        newWorld += char.toLowerCase();
      } else {
        newWorld += char.toUpperCase();
      }
    }
    ans += ` ${newWorld}`;
  }
  return ans.trim();
}

ic(invertCase('Hello, World!'));
