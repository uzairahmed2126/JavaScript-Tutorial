let newElement = document.createElement("h3");
let newText    = document.createTextNode("oyee sunn sunnn");
newElement.appendChild(newText)
let target     = document.getElementById("hireme");
target.insertAdjacentElement("afterbegin",newElement);