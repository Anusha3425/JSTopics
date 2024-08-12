// Entire document is document node
// html Elements are element Node
// the text inside these elements will be text node
// and html attributes are attribute node

// All the nodes have hierarchical relationaship
// the node which doesn't have any parents is Root node(top), and every child has exactly one parent,
// children of same parent are sibling nodes.

// Accessing the innerHTML property is the same as accessing the nodeValue of the first child

let example1=document.getElementById("id1");
onclick = () => {console.log(example1.childNodes[0].nodeValue)}
// child node can be accessed like this

document.getElementById("para1").innerHTML=document.documentElement.innerHTML;
// //documentElement: full document object
document.getElementById("para2").innerHTML=document.getElementById("id2").nodeName;
//nodeName returns name of node; nodeType specifies type of node;
const paragraph = document.createElement("p");
const text= document.createTextNode("This is created through node method");

paragraph.appendChild(text)
const appendNode=document.getElementById("div1");
appendNode.appendChild(paragraph);

appendNode.replaceChild(prop1, prop1)

appendNode.insertBefore(paragraph, prop2)
// const toRemove=document.getElementById("id1");
// appendNode.removeChild(toRemove)

// const toremoveNode=document.getElementById("id2");
// toremoveNode.remove()