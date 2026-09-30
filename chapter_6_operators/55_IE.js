//single if is allowed

if (true) {

}

let num = 7;
if (num % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

let marks = 80;
if (marks >= 90) {
    console.log("grade A");
} else if (marks >= 80) {
    console.log("grade B");
} else if (marks >= 70) {
    console.log("grade C");
} else if (marks >= 60) {
    console.log("grade D");
} else {
    console.log("fail");
}

let year = 2024;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log("leap year");
}
else {
    console.log("not a leap year");
}

let x = true;
if (x) {
    x = false;
    console.log(x);
}
else {
    console.log("hello");
}