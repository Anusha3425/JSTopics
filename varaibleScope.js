let msg=1
msg="1"/1
console.log(msg)

let arra=["fruits"]
arra.push(1)
console.log(arra)

// const a=function greet(msg){
//     let msg="Hi"
//     {
//         let msg="morning"
//         console.log(msg)
//     }
//     console.log(msg)
// }
// let b=a
// a("hi")
//a(1)
// console.log(msg)
// console.log(a.msg, "a.msg")

function outer(a){
    // let b=3;
    function inner(){
        let b=3;
        console.log(b+a);
        inner2()
    }
    function inner2(){
        console.log("hi"+a)
    }
    return inner;
}

let b=outer("Welcome");

let c=outer("home")
c()
b();
// let c;
console.log(b,"bfun",3)
console.log(c)
console.log(typeof(d))

{
    var z=4
}
console.log(z)

// type error:
// can