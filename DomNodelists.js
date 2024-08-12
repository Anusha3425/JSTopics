// NodeList: object is a list (collection) of nodes extracted from a document.

const p_Nodelist=document.querySelectorAll("h1");
console.log(p_Nodelist[0].innerHTML);

console.log(p_Nodelist.length)

for(let i=0;i<p_Nodelist.length;i++){
    console.log(p_Nodelist[i].innerHTML);
}


// NodeLists and HTMLCollections are both almost same, but NodeLists are collection of document nodes, 
// whereas HTMLcollections are collections of document elements.

// NodeLists are static collections, HTMLCollections are live collections