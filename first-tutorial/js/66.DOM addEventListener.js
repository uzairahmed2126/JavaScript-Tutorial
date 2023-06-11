let element;
document.getElementById("hireme").onclick = fn;

function fn(){
    document.getElementById("hireme").style.backgroundColor="black";
}true;

document.getElementById("hireme").addEventListener("click",func);
document.getElementById("hireme").addEventListener("click",function(){
    this.style.background="yellow";
    
    },true);
function func(){
    this.style.borderRadius="90px";

}true;

// removeEventListener method this method have 2 parameter (event and function_name/function)
document.getElementById("hireme").addEventListener("mouseleave",thisis);
document.getElementById("hireme").addEventListener("click",xyz);
function thisis(){
    this.style.backgroundColor="lightblue";
}
// When we are click on this method then it's not to be exicute and we only hover and leave then that's method will be exicute
function xyz(){
    document.getElementById("hireme").removeEventListener("mouseleave",thisis);
}



