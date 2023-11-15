const ic = require('node-icecream')();
function isPalindrom(str) {
  // return str;
  for (let i = 0; i < str.length; i++) {
    ic(str[i]);
  }
}

ic(isPalindrom("'A man, a plan, a canal, Panama!'"));
