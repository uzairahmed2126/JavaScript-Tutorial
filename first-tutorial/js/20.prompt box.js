let a=prompt("What is your name");
alert(a+" Good name ")
let b=prompt("Where are you from");
// confirm(b+" ohh maybe i know this ")
let ent = prompt("ENter percentage");
if(ent<=10){
    console.log("Have a good day");
}else{
    alert("enter valid value")
}

const per =prompt("Enter the value of percentage :");
if (per >= 80 && per <=100){
    confirm("merit")
}else if (per >= 60 && per <80){
    confirm("i")
}else if(per >=45 && per < 60){
    confirm("ii")
}else if(per >=33 && per < 45){
    confirm("iii")
}else if(per < 33){
    alert("you are fail")
}else alert("please enter valid percent")