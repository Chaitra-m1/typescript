let arr = [10, 20, 30];
arr.push(40, 50, 60);
console.log(arr);//[10, 20, 30, 40, 50, 60]

arr.splice(2, 2);//start index 2 and remove 2 elements
console.log(arr);//[10, 20, 50, 60]

arr.splice(2, 0, 90)//dont remove any element at index 2 and add 90 at index 2
console.log(arr);//[10, 20, 90, 50, 60]
arr.splice(2, 2, 88);//remove 2 elements from index 2 and add 88 at index 2
console.log(arr);//[10, 20, 88, 60]
arr.splice(2, 1, 77)//remove 1 element from index 2 and add 77 at index 2
console.log(arr)//[10, 20, 77, 60]
arr.splice(3, 1, 77)//remove 1 element from index 3 and add 77 at index 3
console.log(arr)//[10, 20, 77, 77]
arr.splice(4, 0, 77)//dont remove any element from index 4 and add 77 at index 4
console.log(arr)//[10, 20, 77, 77,77]
arr.splice(2, 3, 30, 50)//remove 3 elements from index 2 and add 30,40,50 at index 2
console.log(arr)//[10, 20, 30, 50]
