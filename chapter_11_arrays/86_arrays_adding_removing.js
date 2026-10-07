let arr = [10, 20, 30]
arr.push(40);//push at the end
console.log(arr);//[10, 20, 30, 40]
arr.pop();//remove from end
console.log(arr);//[10, 20, 30]

arr.push(60, 70);
console.log(arr);//[10, 20, 30, 60, 70]


arr.unshift(5);//unshift add elements at the begninig
console.log(arr);//[5, 10, 20, 30, 60, 70]

arr.shift();//remove the first element
console.log(arr);//[10, 20, 30, 60, 70]