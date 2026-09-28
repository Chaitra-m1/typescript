//confusing comparisions with == (loose) and === (strict)
//Rule: == compares value only (does type coercion), === compares value AND type

//1. number vs string
console.log(1 == "1");//true -> "1" is converted to number 1
console.log(1 === "1");//false -> number vs string

//2. boolean vs number
console.log(true == 1);//true -> true is converted to 1
console.log(true === 1);//false -> boolean vs number
console.log(false == 0);//true -> false is converted to 0
console.log(false === 0);//false -> boolean vs number

//3. null vs undefined
console.log(null == undefined);//true -> special rule, only equal to each other
console.log(null === undefined);//false -> different types
console.log(null == 0);//false -> null only loosely equals undefined
console.log(null == false);//false
console.log(undefined == 0);//false
console.log(undefined == false);//false

//4. empty string vs number/boolean
console.log("" == 0);//true -> "" is converted to 0
console.log("" === 0);//false -> string vs number
console.log("" == false);//true -> both convert to 0
console.log("" === false);//false -> string vs boolean

//5. string "0" is tricky
console.log("0" == false);//true -> both convert to 0
console.log("0" === false);//false
console.log("" == "0");//false -> both are strings, compared as-is (no coercion)

//6. transitive broken example (a == b, b == c, but a != c)
console.log("" == 0);//true
console.log(0 == "0");//true
console.log("" == "0");//false -> proves == is not transitive

//7. NaN is never equal to anything, even itself
console.log(NaN == NaN);//false
console.log(NaN === NaN);//false

//8. object vs primitive (object gets converted with valueOf/toString)
console.log([] == "");//true -> [] becomes ""
console.log([] == 0);//true -> [] becomes "" then 0
console.log([1] == 1);//true -> [1] becomes "1" then 1
console.log([] === "");//false -> object vs string

//9. same reference vs different reference
let obj1 = { name: "qa" };
let obj2 = { name: "qa" };
let obj3 = obj1;
console.log(obj1 == obj2);//false -> different references in memory
console.log(obj1 === obj2);//false
console.log(obj1 == obj3);//true -> same reference
console.log(obj1 === obj3);//true

//Best practice: always use === unless you have a specific reason for ==
