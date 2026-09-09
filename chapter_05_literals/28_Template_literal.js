let firstname = 'chaitra';
let full_name = `hi ${firstname} k m`;
console.log(full_name);//hi chaitra k m

let env = "staging";
env = "production";
env = "development";
let url = `https://${env}.google.com`;
console.log(url);//https://development.google.com

const env1 = "staging";
const url1 = `https://${env1}.google.com`;
console.log(url1);


