const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("enter your name", (name) => {
    console.log("hello", name);
    r1.close();
});

r1.question("enter your age", (age) => {
    console.log("you are", age, "years old");
    r1.close();
});