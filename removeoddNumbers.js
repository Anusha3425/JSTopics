//Remove Odd Numbers using callback function
const Arrnumber=[2, 5, 7, 6, 3, 19, 18];

//here (x) => x%2==0 is callback function
const evenNum=removeOdd(Arrnumber, (x) => x%2== 0 );

console.log(evenNum)

function removeOdd(numbers, callback){
    const result=[]
    for(const x of numbers){
        if(callback(x)){
            result.push(x)
        }
    }
    return result;
}
