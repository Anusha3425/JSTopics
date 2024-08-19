//Array length
const courses=["Javascript", "Pyhton", "Java"]
console.log(courses.length)

//Array to string
console.log(courses.toString())

//to return indexed element
console.log(courses.at(-2))

//adding and deleting element
courses.push("Cpp")
console.log(courses)
courses.pop()
console.log(courses)

//join() acts just like toString()
console.log(courses.join("-"))

//shift() method will remove first element and push all elements to lower indices
courses.shift()
console.log(courses)

//delete() will leave undefined spaces
courses.push("Javascript")
delete courses[2]
console.log(courses)

//concat()- it adds two arrays, can take any number of array arguments
const fru1=["watermelon", "mango", "sapota"]
const fru2=["orange", "mosambi"]
const fru3=["banana"]
const fruits=fru1.concat(fru2,fru3)
console.log(fruits)

// copyWithin()-copies array elemets to another position
// it overwrites the Elements, do not change the length
fru2.copyWithin(1,0)
console.log(fru2)

//flat()-creates new array with sub arrays
const arr1=[[1, 2], [3, 4], [5, 6]]
const arr=arr1.flat()
console.log(arr)

//flatMap()-first maps all elements of an array, then create new array
const mapArr=arr.flatMap(x=>[x, x+1]);
console.log(mapArr)

//splice() - splice removes elemets without leaving holes
// splice(position, no. of elements)
arr.splice(2,3)
console.log(arr)

//slice() - slices out a piece of an array into a new array, it does not alters array
const slicesArr=arr.slice(0,3)
console.log(slicesArr)


//Searching in Arrays

//indexOf-return the index of the first occurance of element
console.log(fruits.indexOf("banana")+1)
//it may have 2 argumets, one for elemts, and the other is where to start the searching
//if there are repeated elemts, indexOf() will return first ocuurance, and lastIndexOf returns last occurnace

//inludes()- search for the item, if present, returns true, else false

console.log(fruits.includes("grapes"));


//Sorting
fruits.sort();
console.log(fruits)

//reverse
console.log(fruits.reverse())

//toSorted- it sorts without changing original array
const sortedFruits=fruits.toSorted();
console.log(sortedFruits)
console.log(fruits)

//Numeric sorting
const num=[25, 28, 8, 2, 22];
num.sort(function(a,b){ return (a-b)})
console.log(num)

num.sort(function(a,b){ return (b-a)})
console.log(num)

//filter()- creates new array with elemets passing the test
const canVote=num.filter(Voterfunc);
function Voterfunc(value){
    return value>18;
}
console.log(canVote)


// find()- it retrieve the first element that passes the test, if no such items found, returns undefined.
const above18=num.find(element => element>18) 
console.log(above18)

// every()- checks if all elements can satisfy a condition
const allabove18=num.every(element=>element>18);
console.log(allabove18)

const allabove0=num.every(element=>element>0)
console.log(allabove0)

// some()- checks if some of the elements pass a condition
const someabove18=num.some(element=>element>18);
console.log(someabove18)

// reduce()- reduces an array as per  function
const num1=[1, 2, 4, 6, 8];
const reduce_func= (a, b) => {
    return a+b;
}
console.log(num1.reduce(reduce_func))