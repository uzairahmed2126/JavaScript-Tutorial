let x = document.forms[0].length;
document.write(" "+x+" ");

let y = document.forms[0].elements[2].value;
document.write(y);

let z = document.forms[0].elements[1].name;
document.write(" "+z+" ");

function html_type() {
  let Type = document.getElementById('btn')
  Type = prompt('How Color you want on click')
  if (Type === (document.style.color = 'black')) {
    document.getElementById('form-container').style.background = 'black'
    document.getElementById('h2').style.background = 'white'
    // document.write(' ' + Type + ' ')
  } else {
    alert('write only black and white')
  }
}

function validator() {
    if(document.forms[0].elements[0].checked) {
        alert("yea it's checked");
    }else{
        alert("no it's not checked");
    }
}