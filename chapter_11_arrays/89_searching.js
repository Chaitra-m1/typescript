let result = ["pass", "fail", "pass", "error", "fail"];
console.log(result.indexOf("pass"));//index of first occurence
console.log(result.includes("pass"));//true if pass is present false otherwise
console.log(result.lastIndexOf("fail"));//index of last occurence
console.log(result.indexOf("skip"));//returns -1 if the element is not present in array

let nums = [10, 20, 30, 40];
console.log(nums.find(x => x > 10));//return 20

console.log(nums.findIndex(x => x > 10));//return the index of 1 which is greater then 10 , 10 having index of 0 so it will return 1


console.log(nums.findLast(x => x > 10));//return the last number which is greater than 10 
console.log(nums.findLastIndex(x => x > 10));//return the last index which is greater then 10
