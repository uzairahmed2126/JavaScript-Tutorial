let a = "90";
console.log(typeof(a));
let num = Number(a);
console.log(typeof(num));

let parse = "54 year 34";
let b = parseInt(parse);
console.log(b);

let parsefl = "54.34";
let c = Number.parseFloat(parsefl);
console.log(c);

var isfin = 9**2003;
var count = Number.isFinite(isfin);
console.log(count);


var isfin = Infinity;
var count = Number.isFinite(isfin);
console.log(count);


var isfin = false;
var count = Number.isFinite(isfin);
console.log(count);

var izsfin = 5*2;
var count = Number.isInteger(isfin);
console.log(count);


var isfin = 34.2233;
var count = isfin.toFixed(1);
console.log(count);

var isfin = 5.65;
var count = isfin.toPrecision(2);
console.log(count);

