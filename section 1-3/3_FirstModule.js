const sayHi = require('./modules/SayHi');
const names = require('./modules/names');
const data = require('./modules/alternativeExports');
require('./modules/mindGrenade');

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
console.log('Alternative Exports: ', data);