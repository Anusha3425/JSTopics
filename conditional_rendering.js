var a = 4;
var b = 6

if(a < b){
    console.log(`${a} is less than ${b}`);
}

function voting(){
    var age = 2;
    if(age>18){
        console.log("you can vote")
    }
    else{
        console.log("Your age must be greater then 18 to vote");
    }
}
voting()

function diet(){
    var weight=155;
    if(weight<45){
        console.log("Underweight");
    }
    else if(weight>80){
        console.log("Overweight")
    }
    else{
        console.log("Healthy Weight")
    }
}
diet()

console.log(a>b?"Greater":"Lesser");

var color=8;

switch(color){
    case 1:
        console.log('Color is Purple');
        break;
    case 2:
        console.log("Color is pink");
        break;
    case 3:
        console.log("Color is peach");
        break;
    default:
        console.log("Color is white") 
}