let browser = ["chrome", "firefox", "edge", "safari", "opera"];

let scores = new Array(3);
scores[0] = 1;
scores[1] = 1;
scores[2] = 3;
let scores2 = new Array(1, 2, 3);
console.log(scores);//[ 1, 2, 3 ]
console.log(scores2);//[ 1, 2, 3 ]

let test = Array.of(10, 20, 30, 40);
console.log(test);

let chars = Array.from("hello");// from is used only for string not for numbers
console.log(chars); 