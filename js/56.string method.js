// let a = "hello world";
// console.log(a.length);

// let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(Upper.toLowerCase());

// let lower = "abcdefghijklmnopqrstuvwxyz";
// console.log(lower.toUpperCase());

// let inc = lower.includes('u');
// console.log(inc);

// let stwith = lower.startsWith('a');
// let enwith = lower.endsWith('z');
// console.log(stwith,enwith);

let str =
  '          JavaScript is  great language in the world JavaScript is good'
str.search('JavaScript');
console.log(str);

let mat = str.match(/is/g)
console.log(mat)

let indx = str.indexOf('is')
console.log(indx)
let lindx = str.lastIndexOf('in')
console.log(lindx)

let replc = str.replace(/JavaScript/g, 'HTML')
console.log(replc)

let trm = str.trim()
// alert(str+" Before triming");
// alert(trm+" After triming");

var string_quotes = 'I am a "double quoted"string inside "double quotes'
console.log(string_quotes)
var string_quotes = 'I am a double quoted string inside double quotes'
console.log(string_quotes)

var string_quotes = '<a href="https://www.example.com"target="_blank">Link</a>'
document.write(string_quotes + '\n')

var IP = "<a href='../html/cal.html'target='blank'>hello</a>"
document.write(IP + '\n ')

var IP = `<a href='../html/cal.html'target='blank'>hello</a>`
document.write(IP)

var string_quotes = '<a href="https:\n\t\\helllo//www.example.com"target="_blank"\nThird'
console.log(string_quotes)

var ourStr = '4'
ourStr *= '3'
console.log(ourStr)

var myStr = "This is the first sentence";
myStr += "This is the second sentence"
console.log(myStr);
