let charat = "JavaScript is a great language";
let a = charat.charAt(3);
console.log(a);

charat=" =A@!#$%^&*()-_=+"
let b =charat.charCodeAt(charat.lastIndexOf(("+")));
console.log(b);

let orignal = String.fromCharCode(33);
console.log(orignal);


let cnct = a.concat(charat);
console.log(cnct);


let str = "JavaScript "
let c =str.split("Script");
console.log(c);

let rpt = str.repeat(10);
console.log(rpt);

let slc = str.slice(0,9);
console.log(slc);

// let sbstr = str.substr(0,5);
// console.log(sbstr);

let sbstring="hello world";
let sbstring2 =sbstring.substring(0,3);
console.log(sbstring2);


let tstr = 12334;
let ttstr= tstr.toString();
// When we want to do arithmetic opration in string so we can do this only excluding + operation
console.log(ttstr+234);
console.log(ttstr/234);
console.log(ttstr-234);
console.log(ttstr*234);
console.log(ttstr%234);
console.log(ttstr**2);

let vlof = sbstring.valueOf();
console.log(vlof);

