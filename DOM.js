//DOM- Document Object Model
// when a page loads, browser creates DOM of the page
// All the HTML elements are accessed by Javascript, they are converted to document object.

// console.log()- prints
// console.dir() - it will print the properties and methods of document object.

// html elements are accessed by js, through window object which has doument model.
// DOM is tree like structure(heirarchial), starting with window->document->html-> head->meta->title->link
//                                                                             |-> body->div->p->h1->img->src->script
// DOM manipulation: Dynamic changes on DOM.

// Accessing HTML DOM elements by id-document.getElementById(), class- document.getElementsByClassName(), Tag- document.getElementsByTagName(), using querySelector().

let prop1=document.querySelector("#id1");
let prop2=document.getElementById("id2");
let prop3=document.querySelector("#id3")

prop1.onmouseover = () => {
   prop1.innerHTML="This is H1 element";
   document.getElementById("id2").style.backgroundColor="violet";
}

// document.getElementById("id2").innerHTML="This is h3 heading";
prop2.onclick = () => {
    prop2.innerHTML="Clicked"
    console.log("clicked")
}

// onclick=()=>{document.getElementById("id3").innerHTML="Clicked button"}
prop3.onclick = () => {
    prop3.innerHTML="Clicked Button"
}

onmouseup=()=>{document.getElementById("image1").src="javascript.png"}
onmousedown=()=>{document.getElementById("image1").src="html.png"}

