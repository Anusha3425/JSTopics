// Asynchronous functions: functions running in parallel, 
// Say for example, if certain functin needs some data from external site, and this task task might be taking time to fetch data, 
// this should not block other things(functins). So we use Async

// callbacks are most often used with asynchronous functions.
// actions that we initiate now, but they finish later.
// Example: waiting for a timeout

// Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs,
// rather than having to wait until that task has finished

setTimeout(counterFunc, 5000);

let i=0;
function counterFunc() {
    i+=5;
    console.log(`${i} seconds`);
}

// here, counterFunc is callback function, and is passed to setTimeout() & setInterval() method as an argument. This function will be called after 5 seconds.
setInterval(counterFunc, 5000);

let j=0;
setTimeout(function counterFunc2() {
    j+=3;
    console.log(`${j} seconds`);
},3000);

// we can pass either function name or the complete function as argument

// Even though the counterfunc is written first, since it is a asynchrounous, it will not block the other functions,
// therefore 3 seconds is printed first.

// With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel
// Callback Alternative: promises

// Javascript is single threaded. so it can only do one task at a time, so if it is waiting for long running synchrounous call to return , it can't do anything before the func is finished.