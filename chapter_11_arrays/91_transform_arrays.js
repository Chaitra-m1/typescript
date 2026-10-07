//map transforms every element and returns a new array
let scores = [10, 20, 30, 40]
let doubledScores = scores.map(s => s > 20 ? "pass" : "fail")
console.log(doubledScores)

//filter keeps only the elements that satisfy the condition
let passing = scores.filter(s => s > 20)
console.log(passing)

//reduce reduces the array to a single value it will do sum of all elements and returns the value
let sum = scores.reduce((acc, current) => acc + current, 0)
console.log(sum)//100

let nested = [[1, 2], [3, 4], [5, 6]]
let flat = nested.flat()
console.log(flat)



