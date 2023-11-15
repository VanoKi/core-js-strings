// eslint-disable-next-line import/no-extraneous-dependencies
const ic = require('node-icecream')();

function formatTime(minutes, seconds) {
  // return `${hourse < 10 ? '0' : ''}${hourse}:${minutes < 10 ? '0' : ''}${minutes}`
  return `${minutes.toString().padStart(2, 0)}:${seconds
    .toString()
    .padStart(2, 0)}`;
}

ic(formatTime(5, 30));
