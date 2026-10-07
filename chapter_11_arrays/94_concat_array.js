let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);//[1,2,3,4]
console.log(b.concat(a));//[3,4,1,2]

//spread (modern way)-concatenating arrays
let d = [...a, ...b]
console.log(d)//[1,2,3,4]

let arr = [1, 2];
let copy = [...arr]
console.log(copy)//[1, 2]
console.log(a, b)

let s = ["pass", "fail", "skip"].join("|");
console.log(s)//pass|fail|skip

let result = s.split("|")
console.log(result)//[ "pass", "fail", "skip" ]
console.log(result.join(""))//passfailskip  