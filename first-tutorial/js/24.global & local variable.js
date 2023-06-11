// It's a global variable we can access anywhere in the program
let a = 20;
function b(hello){
    // it's a local variable and we can't access local variable outof scope
    let c = 22;
    console.log(c)
    console.log(a)
    return hello;

}
console.log(b("uzair"));
console.log(a)

