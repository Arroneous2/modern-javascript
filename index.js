var moment = require("moment");
var mathjs = require("mathjs");

console.log("Why hallo thar");
var datetime = moment().format();
console.log(datetime);
console.log(mathjs.sqrt(-4).toString());

var [a, , b] = [1, 2, 3];
a === 1;
b === 3;
console.log([a, b]);
