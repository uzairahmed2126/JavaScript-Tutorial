document.querySelector("input").addEventListener("click",function (){
    this.style.background="black";
},true);
function element(){
    document.querySelector("ul").style.background="yellow"
}

document.getElementById("main").addEventListener("click",function(){
    this.style.background="yellow";
    
    },true);

document.querySelector("div").addEventListener("click",function(){ this.style.background="aqua"});
document.querySelector("div").addEventListener("click",function(){
    this.style.border="2px solid yellow"
});
document.querySelector("#main").addEventListener("click",function(){
    this.style.backgroundColor="white"
    this.style.color="black"
    this.style.fontSize="13px"
    this.style.borderRadius="40px"
    if(onclick===focus){
        alert("hey")
    }
});

document.querySelector("#main").addEventListener("drag",function(){
    let a = prompt("Write something");
    console.log(a)
});

document.querySelector("input").addEventListener("input",function(){
    let save = this.value
    console.log(document.getElementById("main").innerHTML=save);
})