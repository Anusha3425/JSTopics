//Function declaration :
const arr1=[1, 2, 3];
const arr2=[4, 5, 6];
const arra=arr1.concat(arr2)
function addArray(arr1, arr2){
    return arra;
}

console.log(addArray())

//function without a name is called Anonymous functions
//functions can be declared with expression
//can be stored in variables

const array= function(){ return arr1 }

console.log(array())

//functions can be hoisted: functions can be used before function declaration
console.log(func2())

function func2(){
    return arr2;
}

//functions stored in variables can't be hoisted

//Arrow functions: ES6 - No need to use name function, return and curly braces, represented by '=>'

const x=(a,b)=>a+b;

// Arrow functions can be written with or without parameters, and the parentheses can be omitted in certain cases
let str1="Hi, "
let str2="Good Evening"
const str=()=>str1+str2;
console.log(x(2,4))
console.log(str())

// new function constructor

const func3= new Function("a","b","return a+b")
console.log(func3(3,5))

//functions can be used as values
const funcVal=addArray();
console.log(funcVal)

//functions are object type
console.log(typeof(func2()))

//arguments.length()- returns no. of arguments

//functions can have default parameters
function func4(a, b=0){
    console.log(2*a+b/2);
}
func4(0, 4);

// rest parameter- can have any no. of arguments , use spread operator (...)
function func5(a, ...b){
    console.log(a);
    console.log(b);
}
func5(1, 2, 3, 4,5,6,7,8)

//nested functions: function inside a function, inner function must be called inside outer function
//inner function can access all variables, but outer function can't access variables inside inner function

function outer(){
    console.log(arr1)
    console.log("Outer");
    const set1=["Earth", "venus", "Mercury"]
    function inner(){
        console.log("Inner")
        console.log(set1)
        const set2=["Saturn", "Jupitor", "Mars"]
    }
    inner()
    // console.log(set2)//throws error
}
outer()

// In a function, this refers to the global object
// In a function, in strict mode, this is undefined

//Apply and call method
// The call() method takes arguments separately.
// The apply() method takes arguments as an array

const planets = {
    Description: function(){
        return this.name + " is at "+ this.position + " position from the sun."
    }
}
const planet1={
    name: "Earth",
    position: "third"
}
const planet2={
    name: "Venus",
    position: "second"
}

console.log(planets.Description.apply(planet1))
console.log(planets.Description.call(planet2))


