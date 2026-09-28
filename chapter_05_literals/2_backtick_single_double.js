

//single and double quotes behave the same
let a = 'hello';
let b = "hello";
console.log(a === b); //true

//use the other quote type inside a string
let c = "she said 'hi'";
let d = 'he said "hi"';
console.log(c);
console.log(d);

//backtick can embed variables with ${}
let name = "chaitra";
let e = `hi ${name}`;
console.log(e); //hi chaitra

//backtick can span multiple lines
let f = `line one
line two`;
console.log(f);

//backtick is not same as single or double
let g = `hi ${name}`;
console.log(typeof g); //string
