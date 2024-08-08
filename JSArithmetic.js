//Arithmetic operators

// Adding numbers works in normal way
let sum=5+8
console.log(sum)

//Adding strings will result into concatenation
let Addstring="Anu"+" "+"K"
console.log(Addstring)

//Adding numbers and strings
let Add_num_Str=2+4+"2"+4+5
//numbers before the strings are added up, the rest of the numbers(after qoutes) will be treated as strings, and concatenated
console.log(Add_num_Str)

// Adding numbers with strings
let AddnumWithStr="2"+2+1
console.log(AddnumWithStr)

//If + is added, string is converted into number
let addstrnum=2+ +"2"
console.log(addstrnum)

// ** exponential operator
let exp =2
exp**=2
console.log(exp)

//Logical operators

// ~ - not
// JavaScript uses 32-bit signed numbers. Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
console.log(~5)

// ^ - XOR
console.log(5^1)

// >> - right shift -- it will shift to right 
console.log(5>>1)

// << - left shift -- it will shift to left
console.log(5<<1)