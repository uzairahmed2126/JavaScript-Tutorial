element=document.getElementById("hireme").innerHTML
console.log(element);

element=document.getElementsByClassName("menu")
console.log(element);

element=document.getElementById("hireme").innerText
console.log(element);

element=document.getElementById("hireme").getAttribute("onmouseleave");
console.log(element);

element=document.getElementById("hireme").getAttributeNode("style").value;
console.log(element);

element=document.getElementById("hireme").attributes[0];
console.log(element); 

element=document.getElementsByTagName("div")[1];
console.log(element);

element=document.getElementById("hireme").attributes[0].name;
console.log(element);

element=document.getElementById("hireme").attributes[0].name;
console.log(element);

element=document.getElementById("h1para").attributes[0];
console.log(element);

document.getElementById("hireme").attributes[2].value = "hello";
element = document.getElementById("hireme").getAttribute("class");
console.log(element);

element=document.getElementsByTagName("h1").item("class").attributes[0].value;
console.log(element);

document.getElementById("hireme").removeAttribute("style");


