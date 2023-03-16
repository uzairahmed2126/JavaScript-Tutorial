let newElement = document.createElement("h3");
let newText    = document.createTextNode("oyee sunn sunnn");
newElement.appendChild(newText)
let target     = document.getElementById("insert-id");
// target.insertAdjacentElement("afterbegin",newElement );
// target.insertAdjacentElement("beforebegin",newElement );
// target.insertAdjacentElement("afterend",newElement );
// target.insertAdjacentElement("beforeend",newElement );

let triggered = document.querySelector(".insert-DOM")
let newtrig = "<h3>oyee sun</h3>"
triggered.insertAdjacentHTML("beforebegin",newtrig)
triggered.insertAdjacentHTML("afterbegin",newtrig)
triggered.insertAdjacentHTML("beforeend",newtrig)
triggered.insertAdjacentHTML("afterend",newtrig)

let getelem = document.createElement("h5");
let getnew  = document.createTextNode("hey boi");
getelem.appendChild(getnew);
let gettarget = document.getElementById("insert-id");
gettarget.insertAdjacentElement("afterbegin",getelem);


