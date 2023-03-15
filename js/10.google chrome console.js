// its will count the time that time console has to consume
// console.time("Time keeper");

// Outputs a message to the console
console.log("hey");

// this is print a table of index value and number
console.table([3,3,3]);

// This is object
console.table({Subject:"Commerce",marks:89});

//Outputs an error message to the console
console.error("Someting went wrong");

// to print warning
console.warn("you have warning here");

// This is a Assertion /Emphasize 	Writes an error message to the console if a assertion is false
console.assert(70>200,'Age is not possible');



// its will count the endtime that time console has to consume
// console.timeEnd("Time keeper");

/* The count() method counts the number of times console.count() is called.
The count() method this number to the console.
Logs the number of times that this particular call to count() has been called*/
for (let i = 0; i < 5; i++) {
    console.count();
  }
//The info() method writes a message to the console.
  console.info("default: 6");

  // Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
console.group("Hello World!");
console.log("Hello again, this time inside a group");


/*The groupCollapsed() method starts a collapsed message group.
In the Console, click the expand button to open the new message group.
All new messages will now be written inside this group.*/
console.groupCollapsed();
console.log("Hello Again, this time inside a collapsed group");

// The groupEnd() ends a message group.
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");

