let now = new Date();
console.log(now.toDateString());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
// document.write(now.toDateString());

console.log(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear());

now.setDate(998);
console.log(now);

now.setFullYear(2011);
console.log(now);

now.setMonth(-13);
console.log(now);

now.setHours(4);
console.log(now);

let check = new Date();
document.write(check.getDate()+".");
document.write(check.getMonth()+".");
document.write(check.getFullYear()+"<br> ");
// document.write(now.getSeconds());

// function dosomting () {
//     console.log("hello ");
// }
// setInterval(dosomting,0.1);
// if(setInterval===1000) {
//     setTimeout(dosomting,50);
// }

function print_time() {
    let now = new Date();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    document.write(hours+':'+mins+":"+secs+"<br>");
    
}
setInterval('print_time()',1000);