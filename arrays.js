const courses=["Javascript", "Python", "Java"];
console.log(courses.toString())

for(let i=0;i<courses.length;i++){
    console.log(courses[i])
}

console.log(typeof(courses))
//Arrays are object type

//if we use named indices then, it will be redefined to object
// Objects have names indices, and Arrays have numbered indices

console.log(courses[0])
console.log(courses["name"])

courses.push("Cpp")// to add new array element
console.log(courses)

// Adding elements with high indices will result in holes(empty items)
courses[6]="ReactJs"
console.log(courses)


//Associative Arrays: Arrays with names indices
