// we cannot assign the value of the same variable in const variable
const a =[12,3,45];
// but we can change the value of an array element
a[0] = 23;
a[2] = 23;
a[1] = 232;
// we can't assign the same variable
// a=[23,23];


console.log(a[0],a[1],a[2]);

const b ={
    name : "hello",
    age : 25
};
b.name="boiii";
console.log(b.name);
// we cannot assign the value of the same variable in const variable
// b={
//     name : "hello",
//     age : 25
// };
// b.age="boiii";
// console.log(b.age);