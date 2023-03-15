let a = "hello world";
console.log(a.length);

let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(Upper.toLowerCase()); 

let lower = "abcdefghijklmnopqrstuvwxyz";
console.log(lower.toUpperCase());

let inc = lower.includes('u');
console.log(inc);

let stwith = lower.startsWith('a');
let enwith = lower.endsWith('z');
console.log(stwith,enwith);

let str = "          JavaScript is a       great language in the world JavaScript is good";
srch = str.search("is");
console.log(srch);

let mat = str.match(/is/g); 
console.log(mat);

let indx = str.indexOf("is");
console.log(indx);
let lindx = str.lastIndexOf("in");
console.log(lindx);

let replc =str.replace(/JavaScript/g,"HTML");
console.log(replc);

let trm = str.trim();
alert(str+" Before triming");
alert(trm+" After triming");


