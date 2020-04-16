const someStr = require("./module");
const config = require("./another-module");
const User = require("./third-module");
const UserVasya = require("./json-module");

console.log("Module Demo");

console.log(`Some variable: ${someStr}`);
console.log(`Some other variable: ${config.getVariables().someStr}`);
console.log(`Some class: ${new User("Petya").getUserInfo().name}`);
console.log(`Some json: ${UserVasya.name}`);

