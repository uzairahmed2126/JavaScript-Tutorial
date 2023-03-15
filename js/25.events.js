function clickme(){
    document.body.style.backgroundColor="rgb(23,32,23)";
}
function dblclick(){
    alert("How are you");
}

function textmenu(){
    for(let i=1;i<=3;i++){
        alert("on context menu right click");
    }
}
function mouseEnter(){
    document.body.style.backgroundColor="lightblue";   
    alert("When you hower the mouse you find a statement as programmer given in function");
}
function mouseOut(){
    document.body.style.backgroundColor="darkblue";   
    alert("When you howerout the mouse you find a statement as programmer given in function");

}
function mouseDown(){
    document.body.style.backgroundColor="aqua";   
    alert("When you down the mouse you find a statement as programmer given in function");
    
}
function Mouseup(){
    document.body.style.backgroundColor="darkgreen";   
    alert("When you  up the mouse you find a statement as programmer given in function");
    
}
// It's work in body and also use in input tag
function keypress(){
    alert("You write something")
}
// It's work in input tag and also use in body tag
function Keyup(){
    document.write("Something goes wrong");
}
// It's work in body tag
function Load(){
    alert("Page loaded");
}
// It's work in body tag
function size(){
    alert("your screen is resize");
}
function Scrll(){
    alert("you scrolling this screen");
}