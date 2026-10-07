let a = 60;
let b = 60;
let c = 60;
if (a === b && a === c) {
    console.log("equilateral");
}
else if (a === b || b === c) {
    console.log("isosceles");
}
else {
    console.log("scalene");
}