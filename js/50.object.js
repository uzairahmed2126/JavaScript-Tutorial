// let a = { firstName: 'uzair ',
//  lname: 'ahmed', 
//  age: 19,
//  newobject : { arr1 : [34,2,3], arr2 : [23,25],newobject2:{arr3 : ["hello "],arr4 : ["world"]}
// },
// concatination : function(){
//     return this.firstName + this.lname

// },sum : function(){
//     return this.newobject.arr1[2] * this.newobject.arr2[1];
// },arrconct : function(){
//     return this.newobject.newobject2.arr3 + this.newobject.newobject2.arr4
// }}
// // console.log(a);
// document.write(a.concatination());
// console.log("total of sum "+a.sum())
// console.log(a.arrconct());

// let length = "hey I am not a robot";
// document.write("<br>"+length.length);

// Constructor function
function person(name,age) {
    this.name = name;
    this.age =   age;
}

let the1 = new person("my name is AI",2023);
let the2 = new person("my name is ",20);
document.write(the1.name);
document.write(the1.age);