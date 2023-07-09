// 1
function hello() {
  let back = 'hello edabit.com'
  // console.log(back)
  return back
}

// 2.addition
function addition(num1, num2) {
  // num1+num2
  // console.log(num1+num2)
  // let sum = 0;
  // for(let i=0;i<arguments.length;i++){
  //     sum+= arguments[i];
  // }
  // console.log(sum)
  let add = arguments[0] + arguments[1]
  // console.log(add)
}
addition(3, 2)
addition(-3, -6)
addition(7, 3)

// 3
function convert() {
  let sec = arguments[0] * 60
  return sec
}
// console.log(convert(5))
// console.log(convert(3))
// console.log(convert(2))

// 4
function addition(element) {
  // 1.method with arguments
  // let combine = arguments[0]+1
  // return combine
  // 2.method with parameter
  // let num = element+1
  // return num;
  // 3.method
  return element + 1
}
// console.log(addition(0))
// console.log(addition(9))
// console.log(addition(-3))

// 5 Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
  // return base*height/2
  return (arguments[0] * arguments[1]) / 2
}
// console.log(triArea(3, 2))

// console.log(triArea(7, 4))

// console.log(triArea(10, 10))

// for fayyaz
function getFirstValue(para) {
  // let Invar = arguments[0][0]
  // return Invar
  // return para.shift();
  // return para[0]
  for (let getFirst = 0; getFirst < para.length; getFirst++) {
    // return arguments[0][getFirst];
    return para[getFirst]
  }
}
// console.log(getFirstValue([1, 2, 3]))
// console.log(getFirstValue([80, 5, 100]))
// console.log(getFirstValue([-500, 0, 50]))

function makePair(arr, arr1) {
  // return new Array (arr,arr1)
  return [arr, arr1]
}
// console.log(makePair(1, 2))
// console.log(makePair(51, 21))
// console.log(makePair(512124, 215))

function drop(p1,p2) {
  let arry = [];
  for(let i = p2; i<p1.length;i++){
    arry.push(p1[i]);
  }
  return arry
}
// console.log(drop([1, 2, 3], 1))
// console.log(drop([1, 2, 3], 2))
// console.log(drop([1, 2, 3], 5))
// console.log(drop([1, 2, 3], 0))


function reverse(arg){
  let arr = [];
  for(let i = arg.length-1; i>=0;i--){
    arr.push(arg[i])
  }
  return arr;
}
console.log(reverse([1, 2, 3, 4]))
console.log(reverse([9, 9, 2, 3, 4]))
console.log(reverse([]))