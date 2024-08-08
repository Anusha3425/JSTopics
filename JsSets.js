//Javascript sets
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.
// The values can be of any type, primitive values or object

const planets=new Set(["Earth","3","Mars","4"]);
let list=" ";
//Listing set items with for of 
for(const x of planets){
    list+=x +" ";
}
console.log(list)

planets.add("Venus")
planets.add("Earth")
// if we try to add same element, it won't be added to the set
planets.add("Saturn")

//listing set items with forEach()
planets.forEach(element => {
    console.log(element)
});
// console.log(list2)
console.log(planets)

//set is object type
console.log(typeof(planets))
console.log(planets instanceof Set)

console.log(planets.has("Earth"))

planets.delete("Mars")
console.log(planets)

console.log(planets.size)
