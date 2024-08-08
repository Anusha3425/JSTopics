const coures ={name: "Javascript", duration: "3 months", price: "20000"};
console.log(coures.name)

const fruits = new Object();
fruits.name="Watermelon";
fruits.weight="2-3kg"
fruits.price="75rs"

const x=fruits;
// Here x is not copy of fruits, it's fruits
console.log(x.price)

console.log(fruits);

console.log(x["name"])
//Objects can also accessed like this

//if want to add new property to object
fruits.color="Green"
console.log(fruits)

//to delete a property from object
delete fruits.color
console.log(x)

//adding a method to object
fruits.details=function(){
    return (this.name+ " - "+ this.price).toUpperCase()
//we can add javascript functions also
}

console.log(fruits.details())

//if we omit out the (), it will return function definition
console.log(fruits.details)

//to dispaly object in loop
let fruit="";
for(let i in fruits){
    fruit+=fruits[i]+" ";
}
console.log(fruit)


//Object Constructor
function birds(name, color, flight){
    this.name=name;
    this.color=color;
    this.flight=flight;
}

const Parrot= new birds("Parrot", "green", "yes", "fruits");
const Sparrow= new birds("Sparrow", "Grey", "Yes");
const Penguin = new birds("Penguin", "black", "No");

console.log(Parrot.flight)

//can NOT add a new property to an object constructor
birds.food="food";
// Parrot.food="fruits";
console.log(Parrot.food)

//should use "Prototype " to add new property to object contrsuctor
birds.prototype.food="food"
console.log(Parrot.food)

// Comparing two JavaScript objects always returns false
// === checks for equality of value and type, whereas == checks only for value
console.log(Parrot===Penguin)