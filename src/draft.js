// eslint-disable-next-line import/no-extraneous-dependencies
const ic = require('node-icecream')();

function isPalindrom(str) {
  // return str.length;
  // eslint-disable-next-line no-plusplus
  const str2 = str.toLowerCase().replaceAll(/[^a-w]/g, '');
  return str2 === [...str2].reverse().join('');
}

ic(isPalindrom('A man, a plan, a canal, Panama!'));
