// DOM Traversal it's work parent and child or siblings
// It's throw a null
let a =document.querySelector("html").parentElement;
console.log(a);
// It's throw a node of html that is document and when we check the node of document it's throw a error
let b = document.querySelector("html").parentNode;
console.log(b);
document.getElementById("hireme").parentElement.style.background="lightblack"
let c =document.querySelector("#hireme").parentElement
console.log(c);
document.querySelector("div").parentElement.style.color="green"
document.querySelector("div").style.borderRadius="890px"

