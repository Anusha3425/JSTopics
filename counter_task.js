let cnt=0;

function counter(){
    if(cnt==3){
        return cnt;
    }
    cnt++;
    counter()
}
counter()
console.log(cnt)


let i=0, n=5;
function printToN(i, n){
    if(i>n){
        return i;
    }
    console.log(i)
    printToN(i+1, n);
}

printToN(i, n)


let N=5;
function sumOfN(N){
    if(N==0){
        return 0;
    }
    return N+sumOfN(N-1);
}

console.log(sumOfN(N));