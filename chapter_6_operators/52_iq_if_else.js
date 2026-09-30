if ("hello") console.log("string is truthy");
if (42) console.log("number is truthy");
if (true) console.log("boolean is truthy");
if ({}) console.log("object is truthy");
if ([]) console.log("array is truthy");
if (null) console.log("null is falsy");
if (undefined) console.log("undefined is falsy");
if (0) console.log("0 is falsy");
if (NaN) console.log("NaN is falsy");

let name = undefined
if (name) {
    console.log("name is truthy");
} else {
    console.log("name is falsy");
}

let num = 0
if (num) {
    console.log("num is truthy");
} else {
    console.log("num is falsy");
}