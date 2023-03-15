let a = ["uzair","aman","sohail","ali","unknown"]
document.write(a+"<br>")

let b =a.indexOf("ali",2)
document.write("Normal index :"+b+"<br>");

let c= a.sort().indexOf("ali")
document.write("After sorting index is  :"+c+"<br>")

let x = ["uzair","aman","sohail","ali","unknown"]
let y= x.lastIndexOf("ali")
document.write("last index of : "+y);
