let arr = [10, 20, 30]
console.log(arr)
arr.push(40, 50);
console.log(arr)
arr.shift();
console.log(arr);
arr.unshift(80, 90);
console.log(arr);
arr.splice(2, 2);
console.log(arr);
arr.splice(2, 0, 55, 66);
console.log(arr);
arr.splice(3, 1, 90, 100);
console.log(arr);
arr.splice(3, 0, 200, 300)
console.log(arr)

console.log(arr.find(x => x > 90));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let i = 1; i < arr.length; i++) {
    if (arr[i] == 90) {
        console.log("number 90 is found at index " + i)
    }
    console.log(arr[i])
}

for (test of arr) {
    console.log(test)
}
arr.forEach((test, index) => {
    console.log(test, index)
});
let