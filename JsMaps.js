//Javascript Maps
// Map holds key-value pairs where the keys can be any datatype. it remembers the original insertion order of the keys.

const Elements= new Map([
    ["Oxygen",8],
    ["Hydrogen",1],
    ["Nitrogen",7]
])

Elements.set("Silver",47)

console.log(Elements.get("Silver"))

//Maps unlike objects are directly iterable, have size property, keys can be of any dataType, they do not have default keys
console.log(Elements.size)

//Deletes particular element from the Map
Elements.delete("Hydrogen")


//Listing Map elemets using forEach() method
Elements.forEach((value, key) =>{
    console.log(value, key)
})

//entries()- returns an iterator object with the key,values in a map

for(let x of Elements.entries()){
    console.log(x)
}

//keys(): returns iterator object with key in a map
for(let x of Elements.keys()){
    console.log(x)
}

//values(): returns iterator object with values in a map
for(let x of Elements.values()){
    console.log(x)
}

//clear(): this method will clear all the elements
Elements.clear()
console.log(Elements.size)
