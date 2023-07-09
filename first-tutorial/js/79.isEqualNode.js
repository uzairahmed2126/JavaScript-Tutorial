let eql  = document.querySelector("div").firstElementChild;
console.log(eql)
let eql2 = document.querySelector("div").children[0];
console.log(eql2)
let comp = eql.isEqualNode(eql2);
console.log(comp);

let nt = document.querySelector("div").firstElementChild;
let nt2 = document.querySelector("li");
let check = nt.isEqualNode(nt2);
console.log(check);

const nn = document.querySelector("ul");
comp = eql.isEqualNode(nn);
console.log(comp);

let cld  = document.querySelector("div").firstElementChild;
console.log(cld)
let cld2 = document.querySelector("div").childNodes[1];
console.log(cld2)
let cldc = cld.isEqualNode(cld2);
console.log(cldc);

