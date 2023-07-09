let a = {
    firstname :"hello",
    lastname : "world",
    age : "89",
    country : "poland"

};

for (const key in a) {
 console.log(key+ " : " + a[key])   
}
console.log("\n")
let object = {
    JavaScript :92,
    firstname : "yahoo",
    lastname : "baba",
    country : "pakistan"

};

for (const key in object) {
     console.log(key +" : " + object[key])   
}

console.log("\n");

let obj ={
    first_name : "redmi",
    last_name : "note 9",
    from : "china"
}
for (const key in obj) {
    console.log(key + " : " +obj[key]);
}

let obj_ect = {
    Name : "google",
    alternate : "Chat gpt",
    from :  "space"
}

for (const keys in object) {
    if (Object.hasOwnProperty.call(object, keys)) {
        const element = object[keys];
        
    }
}