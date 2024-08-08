//to use quotes in strigs, we should add
// \' for single quotes
// \" for double quotes
// \\ for backslash

let message= " Hi, Welcome to planet \"Earth\" hear. To go back press to \"Earth\" '\\'.    "
console.log(message)

// Templates are strings enclosed in backticks, they allow multi lines, and to include variable with ${}

let template=`This is a template
 ${message}`
 console.log(template)

 // length method
 console.log(message.length)

 //at(), charAt(), charCodeAt() methods charactor at particular position
 console.log(message.charAt(10))

 //at() support negative indicing
 console.log(message.at(2))
 console.log(message.at(-2))

 //charCodeAt() returns UTF code of that letter
 console.log(message.charCodeAt(2))

 //slice(), substring(), substr() methods - these methods slice the string and returns the extracted new string

 //slice(start, end), end is optional
 console.log(message.slice(0,3))//returns Hi
 console.log(message.slice(4))//if you omit second parameter, it will slice the whole string 
 console.log(message.slice(-16)) // slices from back

 //substring() is similar to slice(), but start and end less than 0, is considered as 0
 console.log(message.substring(-3, 5))

 //substr() similar to slice, but second paramater represents length of the substring 
 console.log(message.substr(0, 12))

 // trim(), trimStart(), trimEnd() methods: these methods trims the whitespaces from both starting and ending, or only from start, or from end.
 console.log(message.trim()) 
 //trims whitespces from both start and end

console.log(message.trimStart())
// trims only from start

console.log(message.trimEnd())
//trims only from end


//padStart(), padEnd(); these methods pads specified length with specied value
let padstr="Hi hello"
console.log(padstr.padStart(4, "*"))

console.log(padstr.padEnd(4, "#"))
// to pad a number, first it should be converted to string, the padded
let num=1;
let numstr=num.toString();
console.log(numstr.padStart(5,"0"))

//repeat(): repeats string specied times
console.log(padstr.repeat(3))

//replace(): replaces specified word with given word, it will replace only first match
console.log(message.replace("Earth", "Mars"))

// to replace all matched value, use replaceAll()
console.log(message.replaceAll("Mars", "Earth"))

// split(): method used to convert string to array, we should mention by what we want to split the string
let strArray=message.split(" ")
console.log(strArray)


//strings searching:
// indexOf(), lastIndexOf(), search(), match(), matchAll()
console.log(message.indexOf("Earth"))//returns first index of matched word
console.log(message.lastIndexOf("Earth"))// returns last index of matched word
console.log(message.search("Earth"))

//search() and indexOf() is same but search() can't have second start position argument
// and indexOf() cannot take powerful search values(regular expressions)
let matchArr=[]
matchArr=message.matchAll("Ear")
console.log(matchArr.length)
