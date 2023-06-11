let newElement = document.createElement("li")
let newText    = document.createTextNode("oye sunn ye new text hai")
newElement.appendChild(newText);
// console.log(newElement);
let target = document.getElementById("fruits");
let oldElement = target.children[1];

// target.replaceChild(newElement,oldElement);
target.removeChild(oldElement);

let aDDEl = document.createElement("li");
let textfordiv = document.createTextNode("This code inject by uzair");
aDDEl.appendChild(textfordiv);

let div = document.querySelector("#fruits");
let divoldEl = div.children[0];
div.replaceChild(aDDEl, divoldEl);
