// Events: change in the state of an object
// event can be something the browser does, or something a user does
// ex: the user selects or clicks or hovors the curson, or can be when form submitted, page finishes loading , error occurs, etc


//Event object: special object that has details about event(e.target, e.clientX, e.clientY)
//Mouse events: These events are arised when mouse is hovered on something, clicked on something etc

let button1= document.querySelector("#button1");
let button2= document.querySelector("#htmlevent");
let button3= document.querySelector("#button3");
let box1= document.querySelector("#box1");

// e is event object
button1.onclick = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log("Clicked");
    document.getElementById("button1").innerHTML = "Clicked";
};


button2.onmouseover = () => {
    document.getElementById("htmlevent").style.color="blue";
    button2.innerHTML="You hovered on the text";
}


button2.onmouseout = () => {
    button2.innerHTML= Date();
}


box1.onmousedown = () => {
    box1.innerHTML="Release me";
    box1.style.color="green";
}

box1.onmouseup = () => {
    box1.innerHTML="Hold me";
    box1.style,color="Black";
}
// onmousedown, onmouseup methods are used to show and hide passwords