    function addition(p1,p2){
        // return p1+p2;
        // return Number(p1)+Number(p2);
        //  return parseInt(p1)+parseInt(p2);
        // return parseFloat(p1) + parseFloat(p2);
        // return (+p1)+(+p2);
    }

    // console.log(addition(3, 2));
    // console.log(addition(-3, -6));
    // console.log(addition(7, 3));
    // console.log(addition('7', '3'));
    // console.log(addition('7', 3));


    // // unary oprator convert string to the number.
    // console.log((+'10' + 10));

    // // It's a concatination.
    // console.log(typeof('10' + 10));
    // // tamplet litrel
    // console.log(typeof(`90`));

    // var a = 78;
    // var v = "fayyaz"
    // console.log(typeof("helo my name is  " +v+" age is "+a));


    // console.log(`hello my name is ${v} my age is ${a}`);
    // var arr=[2,32,3,3,33,33,3];

    // var array = arr.keys();
    // for(var i of array){
    //     console.log(i)}
    // console.log(array);

// Without method implicit;
// with the use of method is explisit
// var a = new String("b");
// a.name = 123;
// console.log(a);

// var b = new Number(34);
// b.age = 19;
// console.log(b);

// var a = new Boolean(true);
// a.name = false;
// console.log(a);

// var a;
// console.log(a)
// let = "fayyaz";
// console.log(let);

// We have 7 data types in js number boolean string null undefined  
// premitive str num boolean und null bigInt symbol; 
// nonpremitive array fun obj;

// this is primitive types
// undefined 
// String
// Number
// Boolean ----- Boolean values are not an object
// null 
// BigInt
// symbol
// Infinity

// this is non primitive types
// object
// Array
// function
// class

// console.log(typeof undefined);
// console.log(typeof String);
// console.log(typeof null);
// console.log(typeof Number);
// console.log(typeof Boolean);
// console.log(typeof BigInt);
// console.log(typeof Symbol);
// console.log(typeof Infinity);
// console.log(typeof Object);
// console.log(typeof Array);
// console.log(typeof function);
// console.log(typeof class);

// function data_type(type){
// return (typeof(type));
// }
// console.log (data_type(undefined));
// console.log(data_type(String));
// console.log(data_type(null));
// console.log(data_type(Number));
// console.log(data_type(Boolean));
// console.log(data_type(BigInt));
// console.log(data_type(Symbol));
// console.log(data_type(Infinity));
// console.log(data_type(Object));
// console.log(data_type(Array));
// console.log(typeof(data_type));


let adnan = [1,2,23];
let variable = adnan.keys();
// console.log(variable.next());
// console.log(variable.next());
// console.log(variable.next());
// console.log(variable.next());
// console.log(variable.next());
// console.log(variable.next());

let = arrowfn => `Hello world`;
console.log(let());

// Create a function that transforms given values;
const input = [1, 2, 3, 4, 5]; 
input.forEach(number)
function number(val){
    return console.log(val*val)

}
// expexted output [1,4,9,16,25]


// Create a function that sum of every (positive) intezers;
const input2 = [1, -4, 12, 0, -3, 29, -150];
let check = input2.filter(flt => flt > -1);
function flt(at){
    

}
console.log(check);
// expected output 42;

let torf=[true,false,"uzair",90,80,70,60,50]
let check1 = torf.filter(allthing);
function allthing(at){
    return at >=40;
}
console.log(check1);
var rndm = Math.floor(Math.random()*4)+0;
console.log(rndm);


// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1)
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;

// }if(number>=20){
//     alert("stop");
// }else{
//     alert("carry on");
// }
