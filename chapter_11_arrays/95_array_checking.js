//checking arrays
//check if something is an array

let result = Array.isArray([1, 2, 3]);
console.log(result)//true
let result2 = Array.isArray("a")
console.log(result2)//false

console.log([80, 90, 100].every(x => x > 70));//true if all the elements are greater then 70
console.log([80, 60, 90].every(x => x > 70));//false
console.log([200, 201, 203].every(statuscode => statuscode > 200));//true
console.log([200, 100, 203].every(statuscode => statuscode > 200));//false

console.log([80, 60, 85].some(x => x < 70));//true if atleast one element is less then 70
console.log([80, 90, 85].some(x => x < 70));//false

