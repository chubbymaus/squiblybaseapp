const moment = require('moment');

// const date = new Date();
//
// console.log(date.getMonth());

// const date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));
let someTimestamp = moment().valueOf();

console.log(someTimestamp);
let createdAt = 1234;
const date = moment();
console.log(date.format('h:mm a'));
