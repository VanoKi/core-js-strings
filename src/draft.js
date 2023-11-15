// eslint-disable-next-line import/no-extraneous-dependencies
const ic = require('node-icecream')();

function isPalindrom(str) {
  return str.split(' ').forEach((e) => [...e].reverse().join(''));
}

ic(isPalindrom('The quick brown fox'));

const str = 'The Quick Brown Fox';
const ans = [];
str.split(' ').forEach((e) => ans.push([...e].reverse().join('')));
ic(ans.join(' '));
