// The keyword async before a function makes the function return a promise
// The word await makes the function to wait for promise
let something=document.getElementById("image");

// async function display(){
//     let promiseEx1=new Promise(function(resolve, reject){
//         resolve("Await in Asynchronous asks to wait for a function to finish");
//     });

//     document.getElementById("awaitEx").innerHTML=await promiseEx1;
// }
// display();

something.onclick=async function showJS(){
    // document.getElementById("image").innerHTML="Background-color is Changed";
    document.getElementById("div1").style.backgroundColor="aliceblue";
    return "Background-color is Changed";
}

showJS().then(
    function(value){displaymsg(value)},
    function(error){displaymsg(error)}
)

function displaymsg(value){
    document.getElementById("image").innerHTML=value;
}

// await in asynchronous Javascript

async function display(){
    let promiseEx1=new Promise(function(resolve, reject){
        resolve("Await in Asynchronous asks to wait for a function to finish");
    });

    document.getElementById("awaitEx").innerHTML=await promiseEx1;
}
display();
// The two arguments (resolve and reject) are pre-defined by JavaScript