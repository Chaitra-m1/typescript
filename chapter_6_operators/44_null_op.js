console.log(null >= 0);//true relational operators (>=, >, <, <=), null is converted For to a number:

//?? nullish
let amul = null;
let milk_required = amul ?? "nandhini milk";//if amul is null nandhini milk will be assigned to milk_required
console.log(milk_required);//nandhini milk if amul is null then it is replaced with nandhini milk
//in this case i want to print the null value
let milk_required2 = amul ?? "nandhini milk";
console.log(milk_required2);//nandhini milk if amul is null then it is replaced with nandhini milk

let dairy = "arun"
let milk_required1 = dairy ?? "nandhini milk";
console.log(milk_required1);//arun // here dairy is not null so it is assigned to milk_required1

//difference between || and ??
let myname1 = "chaitra" || "km";
console.log(myname1)//chaitra

let myname2 = "" || "km";
console.log(myname2)//km
