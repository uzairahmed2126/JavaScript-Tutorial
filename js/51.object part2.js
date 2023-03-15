let person = new Object();

person.firstname = "uzair";
person.secondname ="ahmed";
person.age = 19;
console.log(person)
document.write(person['firstname'])

let hello= new Object();
hello.firstname="habib";
hello.lastname = "shaikh";
hello.country = "saudi arabia";
hello.from = "uae";
console.log(hello)

let obj = Object();
obj.helo="how are you";
// it's print a value without qoutes
console.log(obj["helo"])
// it's print the value with object
console.log(obj)


let learn = new Object();
learn.internet_technology = "ip address"
console.log(learn);
console.log(learn["internet_technology"])

let menk = new Object();
menk.otherway = ["assalamu alaikum","i am muslim"]
// menk.constructor;
console.log(menk.otherway[0],menk.otherway[1]);

let ant = new Object("helllo");
ant.constructor;
console.log(ant)


