// object should have properties
let person = {
    'Firstname' : 'Uzair',
    Secname   :  'Ahmed',
    height : 's'
};
console.log(person['Firstname'])
console.log(person.Secname)

person.age= '19'
delete person.age
person.Firstname='ali'
console.log('height'in person)