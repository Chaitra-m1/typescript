let age = 20;

let is_pramod_will_go_to_goa = age > 18 ? "Yes, let go goa!" : "No you are minor, Not going";
console.log(is_pramod_will_go_to_goa)
// Ternary = condition ? "true resul" : "false result";

let actualststuscode = 200;
let exceptedstatuscode = 200;

let result1 = actualststuscode == exceptedstatuscode ? "pass" : "fail"
console.log(result1)//pass

let environment = 'staging'
let baseurl = environment === 'production' ? "https://api.staging.com" : "https://api.production.com";
console.log(baseurl)//https://api.production.com

let isCI = true
let name = isCI ? "Mani" : "Arun"
console.log(name)//Mani

let responsetime = 800
let sla = 1000
let result = responsetime <= sla ? "pass" : "fail"
console.log(result)//pass







// multiple condition

let age1 = 26;
let is_pramod_goa = age1 > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_pramod_goa);


let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_pramod_d);

let statuscode = 404;
let catogery = statuscode < 300 ? "success" :
    statuscode < 400 ? "Redirection" :
        statuscode < 500 ? "Client Error" :
            statuscode < 600 ? "Server Error" : "Unknown";
console.log(`status ${statuscode} :${catogery}`);