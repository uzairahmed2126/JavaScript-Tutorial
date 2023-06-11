let DaysHours = 24;
if (DaysHours ==23 ){
    console.log(true)
}else{
    console.log(false);
}

let Weather = "Cloudy weather"
if(Weather !== Weather){
    console.log("Go to Picnic")
}else{
    console.log("Wait for Cloudy Weather");
}

let YourWalke_upTime = 5+"am"
if(YourWalke_upTime == 5+"pm" ){
    console.log("Good Morning");
}else{
    console.log("Wake-up early morning");
}

/* program to generate fibonacci series up to n terms
 take input from the user*/
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}if(number>=20){
    alert("stop");
}else{
    alert("carry on");
}

