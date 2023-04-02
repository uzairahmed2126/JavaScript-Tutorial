let eql  = document.querySelector("div").firstElementChild;
let eql2 = document.querySelector("ul").firstElementChild;
let comp = eql.isEqualNode(eql2);
console.log(comp);
let nt = document.querySelector("div").firstElementChild;
let nt2 = document.querySelector("#fruits");
let check = nt.isEqualNode(nt2);
console.log(check)
