//closure: allows accessing variables of outer function from an inner function
// it's function that has access to outer function , even though outer function stopped

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