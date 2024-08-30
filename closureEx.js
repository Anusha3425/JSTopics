msg="Good Morning";
function greet(){
    let msg="good Afternoon"
    {
        let msg="Good evening"
        console.log(msg)
    }
    console.log(msg)
    function greet2(){
        console.log("Inside func C" + msg)
    }
    return greet2;
}
let c=greet()
c()
// console.log(c(),"jk")

function Printname(){
    var name="Closure";
    function Printname2(){
        console.log(name);
    }
    name='lexical scope';
    return Printname2;
}

let func=Printname();
func()


function loopfunc() {
    const x = () => {
        let a=2;
        console.log(a, "x func")

        const y = () => {
            let a=3
            console.log(a, "y func")

            const z = () => {
                console.log(a, "z func")
            }
            a=8
            z()
        }
        a=4
        y()
    }
    return x;
}

let f1=loopfunc()
f1()


function createFunctions() {
    const nums = [];
    for (let i = 0; i < 5; i++) {
        nums.push(function() {
            return i;
        });
    }
    return nums;
}

const numbers = createFunctions();
console.log(numbers[0]());
console.log(numbers[3]());


function outer(b){ 
    function inner(){
      console.log(a, b, "outerInner"); 
    }
    let a =10;
    return inner;
  }
  
  // Passing argument here 
  var close = outer("Hi Closures"); // this will give you outer function
  close();

function Person(name) {
    this.name = name;
    this.getName = function() {
        return this.name;
    };
}

const p = new Person("Bob");
const getNameClosure = p.getName;
console.log(getNameClosure()); 
