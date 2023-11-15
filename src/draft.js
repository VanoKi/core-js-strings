// eslint-disable-next-line import/no-extraneous-dependencies
const ic = require('node-icecream')();

function isPalindrom(str) {
  // eslint-disable-next-line no-plusplus
  let max = 0;
  let ans = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const strElement of str.split(' ')) {
    if (strElement.length > max) {
      max = strElement.length;
      ans = strElement;
    }
  }
  return ans;
}

ic(isPalindrom('The quick brown fox'));
