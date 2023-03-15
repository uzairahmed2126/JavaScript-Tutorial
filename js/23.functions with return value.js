function fn(a,b){
    return b-a;
}
console.log(fn(1,7));

// It's a function scope
function fun(parameter1,parameter2){
    hola = parameter1 + " " +parameter2;
    return hola;
    
}
console.log(fun("uzair","ahmed"));


// It's a block of code 
{
    // can't access this value cause this variable declaration in the block of code and when we have to use var variable so it will be run cause we can assign the var variable any where out of block and between the block.
    let a = 10;
}
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code
console.log(a);

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action