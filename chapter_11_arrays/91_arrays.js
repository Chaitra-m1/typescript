let fruits = ["banana", "apple", "cherry"];
fruits.sort()
console.log(fruits)//sort based on alphabets

let num = [1, 10, 22, 2]
num.sort();
console.log(num)//sort based on first digit o/p [ 1, 10, 2, 22] this sorting called natural sorting or lexicographic sorting

num.sort((a, b) => a - b)//sort based on actual value o/p [1, 2, 10, 22]
console.log(num)
num.sort((a, b) => b - a)//descending order
console.log(num)
