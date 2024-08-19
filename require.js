// const ModuleJS = require("./ModuleJS");
// import { greetES6, greetWithTimeES6 } from "./ModuleJS.js";

const {greet, greetWithTime}=require("./ModuleJS.js");

console.log(greet("Anvika"));
console.log(greetWithTime("Anvika", new Date()))

// In the above code, require() takes file path as argument.
// While requiring module from another file, we can exclude .js extension.
// Also, require can be used inside other functions.



// console.log(greetES6("Anjali"));
// console.log(greetWithTimeES6("Anjali", new Date()))
