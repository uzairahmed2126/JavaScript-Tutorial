// let element;
// element = document.all;
// element = document.domain;
// element = document.baseURI;
// element = document.getElementsByTagName("h1");
// console.log(element);

// element = document.getElementById("hireme");
// console.log(element)

// element = document.getElementsByClassName("ch1")[0];
// console.log(element);

let check= document.getElementById("insert-id");
console.log(check);

let checkbyClass = document.getElementsByClassName("insert-DOM");
console.log(check);

let checkTag = document.getElementsByTagName("ul");
console.log(checkTag);

let queryid = document.querySelector("#insert-id");
console.log(queryid);

let queryclass = document.querySelector(".insert-DOM");
console.log(queryclass);

let setvalue = document.querySelector("ul").innerHTML="helllo world";

let setStyle = document.querySelector("div").style.background="yellow"

document.querySelector("div").setAttribute("style","background: green")

function fn(){
    document.querySelector("div").style.background="aqua"
    alert("you drag on div")
}

