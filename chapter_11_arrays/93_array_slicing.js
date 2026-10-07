let arr = [10, 20, 30, 40, 50, 60];
console.log(arr.slice(1, 3))//start index is 1 and end index is 3 so 3-1 =2 so o/p is 20,30
//// Slicing & Combining
let arr2 = [1, 2, 3, 4, 5];
//. // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
console.log(arr2.slice(1, 3))
console.log(arr.slice(1, 7))//index is greater than array length so it will return all the elements [ 20, 30, 40, 50, 60 ]
console.log(arr2.slice())//it will return the copy of array [ 1, 2, 3, 4, 5 ]
console.log(arr.slice(-2))//[ 50, 60 ]
console.log(arr2.slice(-3))//[3, 4, 5]

console.log(arr.slice(0))//it will print from 0 all the elements [ 10, 20, 30, 40, 50, 60 ]
console.log(arr2.slice(3, 1))//index is greater than array length so it will return []
console.log(arr.slice(3))//it will print from index 3 to the end [ 40, 50, 60 ]