// outer Loop
for(let a=1;a<=5;a=a+1){
    // Inner Loop
    for(let b=a;b<=5;b++){ 
        document.write(b)
        document.write("")
    }
    document.write("<br>")


}
// document.write("<br>")
for(let a=5;a>=1;a--){
    for(let b=a;b<=5;b++){ 
        document.write(b)
    }
    document.write("<br>")


}
document.write("<br>")


for(let x=1;x<=10;x++){
    for(let y=1;y<=x;y++){
        document.write(y);
    }
    document.write("<br>")



}
document.write("<br>")
for(first=10; first>=1;first--){
    // document.write("<br>")
    for(sec=first;sec<10;sec++){
        document.write("*"+" ")
        
    }
    for(third=sec;third>=1;third--){
        document.write(third)
    }
    document.write("<br>")
}
