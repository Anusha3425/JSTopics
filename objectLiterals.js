// Enhancement of Object Literals means grouping up the global variables and forming the object of them.

let names="Earth"
let position=3
let neighbour="Venus"

var planet1={names, position, neighbour}
console.log(planet1)

// we can also define function

var rotate=function(){
    console.log("Require 365 Days")
}

var planet2={names, position, neighbour, rotate}
console.log(planet2)
planet2.rotate()


// When defining object methods, it is not necessary to use the function keyword.
// This is called concise method(method without a semicolon and functio keyword)