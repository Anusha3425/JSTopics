// The getElementsByTagName() method returns an HTMLCollection object.
// HTMLCollection object is an array-like list (collection) of HTML elements

const p_collection=document.getElementsByTagName("p")
console.log(p_collection[0].innerHTML)
// elements in the collection can be accessed by an index number

console.log(p_collection.length)

for(let i=0;i<p_collection.length;i++){
    console.log(p_collection[i].innerHTML)
}

//Dom Collections may look like array, but is not an array.