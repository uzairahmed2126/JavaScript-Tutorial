// it's will be print wrong answer
let gender = "other";
if(gender === "male" ){
    console.log("you are male");
}else if(gender ==="female"){
    console.log("you are female");
}else{
    console.log("wrong answer");
}

let NighttoMorning = 12+"am";
let NoontoEvening_also_Night = 12+"pm";
if(NighttoMorning == 12+"am"){
    console.log("Good Morning");
}else if(NoontoEvening_also_Night == 12+"pm"){
    console.log("Good Evening");
}else{
    console.log("maybe Good After Noon or Good Night")
}

const per =100;
if (per >= 80 && per <=100){
    console.log("merit")
}else if (per >= 60 && per <80){
    console.log("i")
}else if(per >=45 && per < 60){
    console.log("ii")
}else if(per >=33 && per < 45){
    console.log("iii")
}else if(per < 33){
    console.log("you are fail")
}else console.log("please enter valid percent")