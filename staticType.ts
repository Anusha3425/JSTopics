// explicit typing
let nameT: string="anu"
nameT="1"
console.log(nameT)

// console.log("1"/1)   Throws error: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type
// nameT=1  Type 'number' is not assignable to type 'string'.

// implicit typing
let variable=1    //Implicit assignment forces TypeScript to infer the value
// variable="1"    it will throw error (assignment error)

const json= JSON.parse("23")
console.log(json)
console.log(typeof json)

// any is a type that disables type checking and effectively allows all types to be used
let anyType: any=1;
anyType="hello"   //can be converted to any type

// unknown is safer alternative to any
let unknownType:unknown="Unknown type"
unknownType=null;

// Array
const arr:string[]=[]
arr.push("Fruits");
// arr.push(1)    Gives error: Argument of type 'number' is not assignable to parameter of type 'string'

// readonly method: does not allow to modify array
const readonlyArr:readonly number[]=[1, 4, 8]
// readonlyArr.push(1)     Gives error: Property 'push' does not exist on type 'readonly number[]'

// TypeScript can infer the type of an array if it has values
const array1=[1, 2, 3]
array1.push(6)
// array1.push("8")        Gives error: Argument of type 'string' is not assignable to parameter of type 'number'

// Tuples: tuple is a typed array with a pre-defined length and types for each index

let tuple1:[number, string, boolean]

tuple1=[8, "Oxygen", true]

// Named tuples allow us to provide context for our values at each index

let tuple2:[position:number, name: string]=[3, "Earth"];
console.log(tuple2)

// Destructing tuples:
const [num, nameE, available]=tuple1;
console.log(num)

// Objects
// can have optional properties like symbol?:
const object1:{number:number, name:string, symbol?:string}={
    number:2,
    name:"Helium",
    symbol:"He"
}

console.log(object1.symbol)

// TypeScript can infer the types of properties based on their values
const object2={
    topic: "static Typing"
}

object2.topic="Inference"
// object2.topic=2    Gives error: Type 'number' is not assignable to type 'string'