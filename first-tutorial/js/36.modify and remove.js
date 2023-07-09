let dlt = [1,2,3,4];
delete dlt[2]
// it's will be give us undefined
document.write(dlt[2]+"<br>");

let modify =[
["Name","bca","Age","State"],
["uzair","bca","19","State"],
["rehan","bca","18","State"],
["adnan","bca","20","State"]
]
for(let a=0;a<4;a++){
delete modify[a][3];
for(let b=0;b<4;b++){
document.write(modify[a][b]+" ")
}

document.write(" <br> ");

}