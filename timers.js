// window object: All global JavaScript objects, functions, and variables automatically become members of the window object.
// Window object - Timers
// setTimeout(function, ms): this will execute the function after specified millis seconds(1000 ms in 1 sec)
// clearTimeout(): this will stop eecution, it accepts, setTimeout variable as parameter

// setInterval(function, ms): this will execute the function repeatedly after specified time
// clearInterval(): this will stop execution,  it accepts, setTimeout variable as parameter.


document.getElementById("timeoutbtn").onclick= () => timeoutfunc=setTimeout(myfunc, 5000);
function myfunc(){
    let result="Anu"+" "+"K"
    console.log(`Hello ${result}`)
}

document.getElementById("intervalbtn").onclick=()=> intervalfunc=setInterval(displayDate, 5000);
function displayDate(){
    alert(Date());
}