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


