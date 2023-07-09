let a =[10,20,30,40]
document.write(a);
let b = a.some(check);
document.write("<br>"+b+"<br>")

function check(age){
    return age >=18;

}

let x =[10,20,30,40]
document.write(x);
let y = x.every(checkAge);
document.write("<br>"+y)

function checkAge(age){
    return age >=18;
}

let c = [13,2]
document.write(c+"<br>")
let d = c.every(yey);
document.write(d)

function yey(str){
    return str >=2;
}

let arr = [true,"hello",32]
let arrag = arr.some(checkar);
function checkar(fn){
    return fn == Array;
}
console.log(arrag)

let ev = [2,13,3,4]
let assign = ev.some(sleep)
function sleep(rtn){
    return rtn>=1;
}
console.log(assign)
