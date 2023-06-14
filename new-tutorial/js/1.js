// When I write script source at head part then it is naccecary to write attribute defer,
//  The Defer it is read document and then exicute
const get_id = document.getElementById('h')
get_id.innerHTML = 'Uzair Ahmed'
// let a = prompt('What is your name');
// console.log(a);
// let hello = a;
// alert('Your Name is '+hello);

// let fontfamily = document.getElementById('try').style.background=prompt('Font family')
// console.log(color,fontSize);let Bgcolor = document.getElementById('try').style.background=prompt('Enter Background color name')
// let color = document.getElementById('try').style.color=prompt('Enter color name')
// let fontSize = document.getElementById('try').style.fontSize=prompt('Enter font size')

// var digit1 = 5;
// alert((console.log(digit1))); //undefined 5
// console.log(alert(digit1)); // 5 undefined
const a = 9
console.log(a + 1)

let concat1 = 'hello'
let concat2 = 'world'
console.log(concat1 + ' ' + concat2)

let x = 4 + 5
console.log(x)

let boolean = 5
console.log(boolean)

// Data types
// object
let man = { name: 'thomas', age: 50 }
console.log(man.name, man.age)

// undefined
let unde_fined
console.log(unde_fined)

// string
let str = typeof 'String'
console.log(str)

// Number
let nmbr = typeof 90
console.log(nmbr)

let arr = typeof []
console.log(`hello ${arr}`)

// comparison and logical operators

let cmpr = 5 === '5';
console.log(cmpr);


let vote = prompt("What's your age");
let voter_id = confirm('Do you have voter Id');
if(vote>=18 ) {
    alert('you can vote');
}

else if (voter_id===false) {
    alert('You should have your voter Id')
}else {
    alert('Sorry! You are not eligible to Vote!')
}



