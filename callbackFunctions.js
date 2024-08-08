//callback functions: a function that is passed as an argument to other function

function callBackEx (someFunc){
    console.log(someFunc) 
}

//while passing a function, we should not pass (), mycallBack() willbe wrong approach
function ListPlanets(a, b, mycallBack){
    let Planet=a+" "+b;
    mycallBack(Planet);
}

ListPlanets("Earth", "Mars", callBackEx);

//High Order Functions- HOF: is similiar to callback functions, is a function that takes one or more functions as arguments, 
//or returns a function as its result

