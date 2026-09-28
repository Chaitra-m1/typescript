//number == string
console.log(5 == "5");//true because == operator will check only value not type
console.log(5 === "5");//false because === operator will check both value and type
//null == undefined
console.log(null == undefined);//true
console.log(null === undefined);//false
//0 == false
console.log(0 == false);//true because == operator will convert false to 0 and check value
console.log(0 === false);//false because === operator will check both value and type

console.log(null == false);//false
console.log(null === false);//false

console.log(0 == "");//true because == operator will convert "" to 0 and check value
console.log(0 === "");//false because === operator will check both value and type

console.log("" == "0");//false transitive broken of == operator
console.log("" == 0);//true
console.log(0 == "0");//true

console.log(null == 0);//false
console.log(undefined == 0);//false


