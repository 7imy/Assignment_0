var peg = require("pegjs");
var fs = require('fs');


//to read 'grammer.PEGjs' file
const data = fs.readFileSync('grammer.PEGjs', { encoding: 'utf8' });
var parser = peg.generate(data);
var out = parser.parse("441001648");


//Display the file data
console.log(out);