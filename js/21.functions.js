// function hello(){
// for(let i=2;i<=100;i++){
//     for(hello=1;hello<=10;hello++){
//         console.log(i*hello)
//     }
// }
// }
// hello();

// function  Name(){
//     console.log("hello");
    
// }
// Name();

function fn(r,r1) {
    return r + r1 , r-r1 ,r1 / r , r1*r;
}

function Try() {
    // document.querySelector('.try').addEventListener('click');
    // return alert("good after Noon");
}

function fn_call() {
    console.log(fn(5,45));
    Try();
}
fn_call();

// This statement is aligible for exicute but at the end that's throw error
function first() {
    console.log("hey i am first");
     sec();
}
function sec() {
    console.log("hey i am second");
     first();
}
first();
// sec();