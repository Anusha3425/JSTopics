// Javascript dynamically types

// number type represents both integer and floating point numbers.

var num=12;
num=12.4;
console.log(num)
console.log(typeof(num));

// string can be double-qouted, single qouted, also be backticks
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string

var str=" Double ";
console.log(str);
str="Single";
console.log(str);
str=`Backtick can inlcude varibale ${num}`
console.log(str);
console.log(typeof(str));

// Boolean is logical data type
//It has two values, true and false

var isgreater=4>1
console.log(isgreater)
isgreater=3>4;
console.log(isgreater)
console.log(typeof(isgreater))

var example;
console.log(example) //prints undefined
console.log(typeof(example))

var example2=null;
console.log(example2); //prints null
console.log(typeof(example2))
// typeof null is OBJECT, there is no NULL type