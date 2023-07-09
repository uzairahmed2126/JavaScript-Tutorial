let fnd = [10,9,29,92,"hello"];
let checkindexvalue = fnd.find(grtr);

function grtr(age){
    return age < 10;

}
console.log(checkindexvalue);

let fndi = [10,9,29,92];
let chekindex = fndi.findIndex(grtrindex);

function grtrindex(greater){
    return greater >=90 ;

}
console.log(chekindex);