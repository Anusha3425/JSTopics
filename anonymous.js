const sum= function(){
    console.log("sum")
    return 3;
}

console.log(sum(2))

const sum2=a=>{
    console.log("sum2")
    return a+3;
}

console.log(sum2(4));

setTimeout(sum);

(function(){
    const num=2;
    console.log(num)
})()

setTimeout(sum,1000);
setTimeout(()=>sum2(2), 3000);