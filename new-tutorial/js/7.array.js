let books = ['math', 'physics', 'bio', 'computer science']
books.push('Urdu')
books.pop()
books.unshift('first')
books.splice(1, 1)
// The shift function remove first element
books.shift('')
console.log(books)
books[3] = 'english'
console.log(books.length)

for (let i = 0; i < books.length; i++) {
  console.log(books[i])
}

// let arr = prompt('enter array value');
// for(let j= 0 ; j<arr.length;j++){
//     console.log(arr[j])
// }

console.log(typeof console) //object
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof document) //object
console.log(typeof []) //object
console.log(typeof '') //string
console.log(typeof 334) //number 

let try_to_check = 'isArray or not'
console.log(Array.isArray(try_to_check))

// split make a new array
let wordArray = try_to_check.split(' ')
console.log(wordArray)
