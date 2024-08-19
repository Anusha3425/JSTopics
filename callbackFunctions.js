// Callbacks are essential for managing the outcomes of asynchronous tasks without blocking the program’s execution.
//Callback functions: a function that is passed as an argument to other function

function callBackEx (someFunc){
    console.log(someFunc) 
}

//while passing a function, we should not pass (), mycallBack() willbe wrong approach
function ListPlanets(a, b, mycallBack){
    let Planet=a+" "+b;
    mycallBack(Planet);
}

ListPlanets("Earth", "Mars", callBackEx);

// Real World Examples: When loading the image, handling form submission

// Callback hell-“pyramid of doom,” 
// it is created when there are multiple nested callback functions, which make the code complex and hard to read.

// To solve this, we can use promises or async/await

//High Order Functions- HOF: is similiar to callback functions, is a function that takes one or more functions as arguments, 
//or returns a function as its result

