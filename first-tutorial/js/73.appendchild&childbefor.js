let newElement = document.createElement("h3");
let newText = document.createTextNode("This is just text");

newElement.appendChild(newText);
console.log(newElement);

let before = document.createElement("h4");
let after  = document.createTextNode("title");

before.appendChild(after);
console.log(before);

let create =        document.createAttribute("style");
let Attributejoin = document.createTextNode("backgroundColor.black");
console.log(create);

let createagain = document.createTextNode("hello world");
let AgainJoin   = document.createElement("h4");
AgainJoin.appendChild(createagain)
console.log(AgainJoin);

let writehere = document.createElement("h1");
let after1  = document.createTextNode("title");
// let joinhere  = document.appendChild()
writehere.appendChild(after1);
console.log(after1);

let cmmnt = document.createComment("Hey It is comment");
document.getElementById("hireme").appendChild(cmmnt);
console.log(cmmnt);

let movefile = document.getElementById("hireme");
movefile.insertBefore(cmmnt,movefile.childNodes[0]);

