let clone = document.getElementById("fruits").children[0]
console.log(clone)
let copyelement = clone.cloneNode(true);
console.log(copyelement);
document.getElementById("insert-id").appendChild(copyelement);
document.querySelector("div").appendChild(copyelement);

let nc = document.querySelector("div").cloneNode();
console.log(nc)
let target = nc.cloneNode(true);
console.log(target)
document.querySelector("ul").appendChild(target);


