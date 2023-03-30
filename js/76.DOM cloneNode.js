let clone = document.getElementById("fruits").children[0]
console.log(clone)
let copyelement = clone.cloneNode(true);
console.log(copyelement);
document.getElementById("insert-id").appendChild(copyelement)
// "insert-id"
// id="fruits"


