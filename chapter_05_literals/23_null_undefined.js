
// Difference between null and undefined

// undefined = variable declared but NOT assigned any value yet (automatic)
let a;
console.log(a); // undefined
console.log(typeof a); // "undefined"

// null = you EXPLICITLY say "this variable has no value / empty on purpose"
let b = null;
console.log(b); // null
console.log(typeof b); // "object" (this is a famous JS quirk/bug)

// functions return undefined when they don't return anything
function doNothing() {}
console.log(doNothing()); // undefined

// accessing a property that doesn't exist gives undefined
let person = { name: "chaitra" };
console.log(person.age); // undefined

// when to use null -> you want to CLEAR/reset a value
let score = 100;
score = null; // reset to empty
console.log(score); // null

// quick check: both are "falsy", but they are NOT equal to each other
console.log(null == undefined); // true  (loose equality)
console.log(null === undefined); // false (strict equality)
