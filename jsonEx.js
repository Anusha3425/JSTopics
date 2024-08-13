// JSON: Javascript object notation,
// text format for storing and transporting data, used to transport data between computors. 
// JSON is just like js object, JSON.parse()- pareses the JSON and converts ti JS Object.
// JSON.stringify()- converts an object into a JSON string

// JSON syntax:
// hold key-value pair, data separated by commas, {} for objects, [] for arrays.

// JSON can be string, number, boolean, array, object, null
// it cannot be a function, date, undefined

// JSON strings must be double qouted {"name":"Anu"}
// JSON numbers should be either integer or floating number.{"num":25} {"num": 2.002}
// JSON objects are written in curly braces.
// {
//     "planets":{"name":"Earth","place":"3"}
// }
// JSON arrays are written in square brackets.
// {
//     "fruits":["watermelon", "Mango"]
// }
// JSON boolens. {"cookies enabled":true}
// JSON null: {"localstoarge":null}

const Objtext='{"name":"Hydrogen","number":"1","symbol":"H2"}'
const parsedObj=JSON.parse(Objtext);
console.log(parsedObj.name);
console.log(JSON.parse(Objtext));

for(let x in parsedObj){
    console.log(`${x}: ${parsedObj[x]}`)
}

const ArrayTxt='["Earth","Mars","Venus"]'
const parsedArr=JSON.parse(ArrayTxt);
console.log(parsedArr)
console.log(parsedArr[1])

// Dates are not valid JSON. to include dates, write it in strings and then convert to Date.
const text='{"name":"Hydrogen","number":"1","symbol":"H2","date":"1990-7-22"}'
const parsedtxt=JSON.parse(text);
const JsonDate= new Date(parsedtxt.date);
console.log(JsonDate);

// Functions are not valid in JSON. to include functions write it in strings, the using eval func convert it back to function


// JSON.stringify: converts js objects or arrays to strings.
const obj={name:"Oxygen",number:"8",symbol:"O2"}
const objStringified=JSON.stringify(obj)
console.log(objStringified)


const arr=["Saturn","Uranus","Mercury"]
const arrStringified=JSON.stringify(arr);
console.log(arrStringified)

// JSON stringify() convert any dates to string
const dateobj={date:new Date()}
const datestr=JSON.stringify(dateobj);
console.log(datestr)