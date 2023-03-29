// let arr = [{ fname: 'uzair', lastname: 'ahmed' }]
// let b = arr.map(test)
// document.write(b)
// function test(x) {
//   console.log(x.fname)
// }

// let uzz = [12.3, 2344, 323, 2, 4]
// let con = uzz.map(mult)
// console.log(con)
// function mult(f) {
//   return f * 10
// }

// let arry = [
//   {first: 'hello', second: 'world'},
//   {first : 'include', second : 'stdio.h'},
//   {first : 'include', second : 'conio.h'}];

// let d = arry.map(conct)
// function conct(y) {
// return  console.log(y.first);
// }

let hello = [2,3,4,5,6];

let mut = hello.map((value) => {return(value*2)});
console.log(mut);

let arrobj = [
  {firstN : "oyyee" ,secn : "sunn"},
  {firstN : "hey"   ,secn : "boiii"},
  {firstN : "helo"  ,secn : "babe"}
]
arrobj.map((takewhole) => {return console.log(takewhole.firstN+' '+takewhole.secn)});