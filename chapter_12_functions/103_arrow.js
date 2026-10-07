//function expression
const greet = function (name1) {
    return name1;
}
let result = greet("hkhs");
console.log(result)//hkhs

//arrow function

const greet2 = (name1) => "hi " + name1;
let result2 = greet2("hkhs");
console.log(result2);//hkhs

//If we want to make normal function to arrow function
//Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
//To make arrow function return should be there

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("schh");
