// local storage: Unlike cookies, they won't send data everytime, stores data locally, no expiration time
// - stored data is saved across browser sessions

let key=prompt("Enter key");
let value=prompt("Enter value");


// setItem(): store key-value pair
localStorage.setItem(key, value);
console.log(localStorage.getItem(key))
// getItem(): gets the value by key

if(key=="Anu"){
    localStorage.removeItem(key)
}
// it will delete single item

if(key==0){
    localStorage.clear()
}
// it clears whole localstorage

console.log(localStorage.length)
console.log(localStorage.key(2))