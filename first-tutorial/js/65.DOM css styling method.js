let element;
// element = document.querySelector("#hireme").style.fontStyle="italic";
// console.log(element);


function fun(){
    console.log(document.querySelector("#hireme").style.color="green");
    console.log(document.querySelector("#hireme").style.backgroundColor="pink");
    console.log(document.querySelector("#hireme").style.width="480px");
    console.log(document.querySelector("#hireme").style.borderRadius="50px");
    console.log(document.querySelector("#hireme").style.fontSize="50px");
}

function fun1(){
    console.log(document.querySelector("#hireme").style.color="red");
    alert(document.querySelector("#hireme").style.color="red");
}

// If any css property have a hyphen so when we want to write in querySelector then we write in the form of camelCase.
function wheel(){
    console.log(document.querySelector("p").style.backgroundColor="aqua");
    console.log(document.querySelector("p").style.color="black");
    
}
// Class name return name in form of string
element=document.querySelector("#hireme").className = "c_hire";
console.log(element);

// classList return Array and it's name is DOMTokenList.
document.querySelector("#hireme").classList = "c_hire abc";
element=document.querySelector("#hireme").classList;
console.log(element);

// We can write multiple classes with the use of (add) method.
document.querySelector("#hireme").classList.add("clas1","clas2");

// We can remove MUltiple classes with the use of (remove) method.
document.querySelector("#hireme").classList.remove("clas1","clas2");
