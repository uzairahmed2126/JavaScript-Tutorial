function addition(num1,num2){
    // return Number(num1)+Number(num2);
    // return num1 * num2;
    // return (+num1)+(+num2);
    // return parseInt(num1) +parseInt(num2);
    // return parseFloat(num1) + (+num2)

}

// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3) );
// console.log(addition('7', '3'));
// console.log(addition('7', 3));

// 2 ==>

function convert(conv){
    // return Number(conv*60)
    // return conv*60;
     
}
//   console.log(convert(5));
//   console.log(convert(3));
//   console.log(convert(2));
//   console.log(convert('2'));

// 3 ==>
// function addition(add){
//     // return Number(add)+1;
//     return parseInt(add)+1;
// }
//   console.log(addition(0));
//   console.log(addition('9'));
//   console.log(addition('-3'));


// 4 ==>
// function giveMeSomething(str){
// return String("something ")+str;
// }
// console.log(giveMeSomething("is better than nothing"));
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something"));

// x = "is better than nothing";
// giveMeSomething(x);


function addition(num1,num2){
    return Number(num1)+Number(num2);
    // return (+num1) + (+num2)
    // return parseInt(num1)+parseInt(num2);
    // return (Number(num1)+(Number(num2)))


}
// console.log(addition(3, 2))
// console.log(addition(-3, -6))
// console.log(addition(7, 3))
// console.log(addition('7', '3'))
// console.log(addition('7', 3))

function convert(multiply){
  return multiply*60
}
// console.log(convert(5))
// console.log(convert(3))
// console.log(convert(2))
// console.log(convert('2'))

// 3 ==>
function addition(value){
    // return (+value)+1;
    // return Number(value)+1
    // return parseInt(value)+1
}
// console.log(addition(0))
// console.log(addition('9'))
// console.log(addition('-3'))


// 4 ==>
function giveMeSomething(str){
    // return String("Something ")+str;
    // return ("Something ")+str
    // return (`something ${str} `)

}
//  console.log(giveMeSomething("is better than nothing"));
//  console.log(giveMeSomething("Bob Jane")); 
//  console.log(giveMeSomething("something")); 

// Area of a Triangle
function triArea(base,height){
   return 0.5*(base*height);
}
console.log(triArea(3, 2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));

function incrementItems(increment){
    // for(let i=0;i<4;i++){
//         console.log(arr[i]+1);

//    }
//    console.log("\n")
// return console.log(increment[0]+1,increment[1]+1,increment[2]+1,increment[3]+1);
return increment.map(function(item){
    return item+1;
});

}
console.log( incrementItems([0, 1, 2, 3]) )
console.log( incrementItems([2, 4, 6, 8]) )
console.log( incrementItems([-1, -2, -3, -4]) )