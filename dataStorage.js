const txt={name:"Earth", place:"3"};
const storeTxt=JSON.stringify(txt);
localStorage.setItem("Planets", storeTxt);

const txtStored=localStorage.getItem("Planets")
const jsontxt=JSON.parse(txtStored)
console.log(jsontxt.name)
console.log(jsontxt.place)