let sum = 0
let arr = [10, 20, 30, 40, 50]
for (let a = 0; a <= 4; a++) {
  sum = sum + arr[a]
  console.log(sum * arr[a])
}

let str=[true ,"hello","world"]
for(let b=0;b<=2;b++){
    console.log(str[1]+" "+str[2]);
}

// let array = 0;
// function multiply(assign){
//   multiply.forEach(assign => {
//     assign*2
    
//   });
// }

let multiply=[10,20,30]

multiply.forEach(function(index) {
  console.log(index*2);
  
});

let ary = ["uzair","ahmed",{age:19},89,true,false,Object];
// ary.forEach (ary => {return (typeof value)});
// console.log(value)
ary.forEach(function(value){
  console.log (typeof value);
});

console.log(typeof ary[2]);

let arry = ["uzair","ahmed",{age:19},89,true,false,Object];
console.log(arry[4]);

let things = new Array(3);

things[0] = "0";
things[1] = "1";
things[2] = "2";

console.log(things[2]);

let lang = new Array ("html" ,"css" ,"js");
let friend_names = new Array ("sohail","ali","umer","shahid");

var to_string = lang.toString(friend_names);
console.log(to_string);

var to_string = lang.join(" ");
console.log(to_string);
var to_string = friend_names.join(" ");
console.log(to_string);

lang.pop();
console.log(lang);

friend_names.reverse();
console.log(friend_names);

lang.push("c#","");
console.log(lang);

lang.sort();
console.log(lang);

// let crap  = new Array(3);
// for(i=0; i<3 ; i++) {
//   crap[i] = prompt("Add something to the Array:");
//   console.log(crap[i]);
// }

let fruits = new Array ("Apple","Banana","Pears","promogrant","Kivi");
for(i=0;i<fruits.length;i++) {
  console.log(fruits[i]);
}

// Assosiative Array
let n_arr = new Array();
n_arr["color",1] = "green";
n_arr["fruite",2] = "Apple";
console.log("My favourite Fruit is " + n_arr[2]);
