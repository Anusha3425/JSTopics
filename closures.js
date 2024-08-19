//closure: allows accessing variables of outer function from an inner function
// it's function that has access to outer function , even though outer function stopped
// retain access to variables from the containg scope even after the function finished its execution
// bundled together with references to it's surrounding (lexical scope)

function outer(){
    let x=2;
    console.log(x)
    function inner(){
        let y=3
        console.log(y);
    }
    return inner
}

let a= outer()
a()

//outer function can't access inner functions' variables
//closures can preserve data while invocations


function outerfunc(x){
    function innerfunc(y){
        console.log(x)
        console.log(y)
    }
    return innerfunc
}

const out = outerfunc('x')
out('y')

// A closure is a function that has access to variables in its outer scope, even after the outer function has returned. 
// This allows the callback function to access variables and information from the main function,
// even after the main function has completed its execution

function loopEx(){
    let arr=[];
    let i;
    for(i=0;i<5;i++){
        arr[i]=function(){return i}
    }
    return arr;
}

let get_array=loopEx();
console.log(get_array[3]())

// Closure doesn’t remember the value of the variable it only points to the variable or stores the reference of the variable,
//  and hence, returns the current value. 

// block is just a peice of code that has group of instructions.
// closure is real object that has block as it's value.

