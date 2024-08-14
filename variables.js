// Variable declaration using var

console.log(a);
var a=1;

var message= "Variable outside func";
function v1(){
    var message="Variable inside func";
    console.log(message)
    message="Re-declared variable";
    console.log(message);

}
v1();
console.log(message);

// re-declaration is possible. we cannot re-declare a variable declared with let or const
// can be hoisted
// scope- functional or global

// Before ES6 version, var was in use, in ES6 let and const introduced
// Variable declaration using let

// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope

// console.log(b);
let b=2;
let message2="Outside func";
function v2(){
    let message2="inside func";
    console.log(message2);
    // message2="redeclared"
}
v2();
console.log(message2);

// Re-declaration is not allowed
// Can't be hoisted
// block scoped

//Variable declaration using const

const c=3;
console.log(c);
function v3(){
    const c=4;
    console.log(c);
}
v3()

// Re-declaration is not allowed
// Can't be hoisted
// block scoped
// Can't be updated