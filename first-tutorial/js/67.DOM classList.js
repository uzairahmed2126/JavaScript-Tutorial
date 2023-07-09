document.getElementById("hireme").addEventListener("click",abc);

function abc(){
    document.querySelector("#hireme").style.background="yellow";
    document.querySelector("#hireme").style.color="green";
    document.querySelector("#hireme").style.borderRadius="90px";
    document.querySelector("#hireme").style.fontSize="small";
    document.querySelector("#hireme").classList.add("abc","xyz","hulk");
    document.querySelector("#hireme").classList.remove.style;
    document.querySelector("#hireme").classList.length
    document.querySelector("#hireme").classList.toggle("hulk");
    let a = document.querySelector("#hireme").classList.item(1);
    let b = document.querySelector("#hireme").classList.contains("hulk");
    let c = document.querySelector("#hireme").classList.length;
    console.log(a);
    console.log(b);
    console.log(c);
}