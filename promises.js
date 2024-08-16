// Promises are the foundation of asynchronous programming in modern JavaScript. 
// A promise is an object returned by an asynchronous function, which represents the current state of the operation

let promiseEx = new Promise(function(Resolved, Rejected) {
      Resolved(); // when successful
      Rejected();  // when error
    });

    // This is the rpoducing code.

function DisplayList(){
    let List=["Earth","Mars","Saturn"]
    console.log(List)
}

function throwerror(){
    console.log("Error")
}
    
    promiseEx.then(
      function(value) { DisplayList() },
      function(error) { throwerror() }
    );
    // This is the consuming code


let Promise2= new Promise(function(resolve1, reject1){
    setTimeout(() => { resolve1("OK")}, 4000);
})

Promise2.then(function(value){
    console.log(value);
})

function myDisplayer(some){
    document.getElementById("show").innerHTML=some;
}
let Promise3 = new Promise(function(resolved3, rejected3) {
    let req = new XMLHttpRequest();
    req.open('GET', "fetchApi.html");
    req.onload = function() {
      if (req.status == 200) {
        resolved3(req.response);
      } else {
        rejected3("File not Found");
      }
    };
    req.send();
});
  
Promise3.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);
