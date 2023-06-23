// object should have properties
let person = {
  Firstname: 'Uzair',
  Secname: 'Ahmed',
  license : 'no',
  sayHello() {
    console.log('helo')
}
}
// console.log(person['Firstname'])
// console.log(person.Secname)
person.sayHello();
person.age = '19'
delete person.age
person.Firstname = 'ali'

// The in method do return true and false
console.log('Firstname' in person)

for (const key in person) {
//   if (Object.hasOwnProperty.call(person, key)) {
    // const element = person[key]
    // console.log(element)
//   }
// console.log(key,person[key])
}

// method in object
person.sayHello = function(){
    console.log('hello!');
}

function fncname(){
    console.log('oye');
}

// person.sayHello = fncname;
