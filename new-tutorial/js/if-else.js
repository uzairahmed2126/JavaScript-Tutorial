// let vote = prompt("What's your age")
// let voter_id = confirm('Do you have voter Id')
// if (vote >= 18) {
// } else if (voter_id === false) {
//   alert('You should have your voter Id')
// } else {
//   alert('Sorry! You are not eligible to Vote!')
// }

let isloggedin = document.getElementById('login') //prompt(`Enter ${true} or ${false}`)
// let option = isloggedin===prompt?"logout" : "login";
if (isloggedin === '#$_') {
  console.log('Login Successful')
} else {
  console.log('Logout successful')
}
//alert(option)

let user = document.getElementById('login')
// user=== fetch;
// user='1';
console.log(user) //protection about undefined
let inpt =prompt('df');
let inpt1 = inpt
switch (inpt1) {
  case 1:
    alert('You select a number')
    break;
  case 2:
    alert('you select a string')
    break;
  case 3:
    alert('you select a boolean')
    break;
  default:
    alert('Enter valid')
}
