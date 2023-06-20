let books = ['math', 'physics', 'bio', 'computer science']
books.push('Urdu')
console.log(books)
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

// join
let joinarray = books.join(' ')
console.log(joinarray)

// string is array of characters
let combine = books.concat(wordArray)
console.log(combine)

let bookwithPages = [
  ['math', '300'],
  ['physics', '500'],
]
console.log(bookwithPages)

let a = books.forEach(myfu)
function myfu(a) {
  console.log(a)
}

let b = books.forEach((element) => {
  console.log(element)
})

// function
let wholeBody = (document.ondrag = function () {
  Muliply()
})
function Muliply() {
  // for(i=1;i<=10;i++) {
  //     document.write(`2 x ${i} = ${2*i}<br>`)
  // }
  alert('Assalamu Alykum')
}
let make = document.createElement('a')
make.textContent = 'drag me'
document.body.appendChild(make)

function calculation(addnum){
    for(let i=1;i<=10;i++) {
      document.write(`${addnum} x ${i} = ${addnum*i}<br>`)
  }
}
calculation(prompt('enter any number'));