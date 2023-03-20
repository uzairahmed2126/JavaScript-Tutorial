function findPerimeter(num1,num2){
    return  2*(num1 + num2);
}
// console.log(findPerimeter(6, 7));
// console.log(findPerimeter(20, 10));
// console.log(findPerimeter(2, 9)); 


// Football Points
//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.
function footballPoints(wins,draws,losses){
    return 3*(wins)+draws;
}
// console.log(footballPoints(3,4,2))
// console.log(footballPoints(5,0,2))
// console.log(footballPoints(0,0,1))


// Are the Numbers Equal?
//     Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1,num2){
    return Object.is(num1,num2);
}
// console.log(isSameNum(4,8));
// console.log(isSameNum(2,2));
// console.log(isSameNum(2,"2"));
// console.log(isSameNum(0,-0));

// 4.==> The Farm Problem
//     In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//         chickens = 2 legs
//         cows = 4 legs
//         pigs = 4 legs
//     The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//     animals(2, 3, 5) ➞ 36
//     animals(1, 2, 3) ➞ 22
//     animals(5, 2, 8) ➞ 50
//     Remember that the farmer wants to know the total number of legs and not the total number of animals.

function animals(chickens,cows,pigs){
    return 2*chickens+(4)*cows+(4)*pigs
}
console.log(animals(2,3,5))
console.log(animals(1,2,3))
console.log(animals(5,2,8))