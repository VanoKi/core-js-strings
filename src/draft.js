// eslint-disable-next-line import/no-extraneous-dependencies
const ic = require('node-icecream')();

function encodeToRot13(str) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let ans = '';
  for (let i = 0; i < str.length; i += 1) {
    if (abc.includes(str[i])) {
      // eslint-disable-next-line no-unused-vars
      ans += abc[(abc.indexOf(str[i]) + 13) % 26];
    } else if (abcUpper.includes(str[i])) {
      ans += abcUpper[(abcUpper.indexOf(str[i]) + 13) % 26];
    } else {
      ans += str[i];
    }
  }
  return ans;
}

ic(encodeToRot13('hello'));
