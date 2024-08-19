// A rest operator is a type of parameter that gets all of the remaining parameters of a function call via an Array.
// The spread operator divides an array or object into separate elements or properties.

// Use of Spread operator, in the below example eachRoom is array, using spread opeartor, it divides the array elements.
function TotalNoofGuests(BigRoom, ...EachRoom) {
    let total = BigRoom;
    for (const num of EachRoom) {
      total += num;
    }
    return total;
  }
  
  const BigRoom = 10;
  const EachRoom = [6, 4, 5, 3];
  
  const Totalnum = TotalNoofGuests(BigRoom, ...EachRoom);
  console.log(Totalnum)
// used to spread the array
// creates new array with gathered items
// can be used anywhere

// rest operator
function restEx(a, ...b){
    return a+b;
}


console.log(restEx(1, 2, 4, 3, 5, 6))
// used to gather arguments in functions
// gathers arguments by dividing the array 
// must be the last argument in function call