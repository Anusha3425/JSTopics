const Hightemp=new Promise((res, rej)=>{
    setTimeout(function(){
        res("Laptop is heated, fan is turned ON")
    }, 5000);
})

Hightemp
.then(value=>{
    console.log(value)
})
.catch(error=>{
    console.log(error)
})
.finally(()=>{
    console.log("Operation success")
})

const GotMessage=new Promise((res, rej)=>{
    let blink=true;
    setTimeout(function(){
        console.log("Message is seen")
        clearInterval(msg)
    }, 15000)
    const msg=setInterval(function(){
        if(blink){
            console.log("You have got a message! (Light is ON)");
            blink=false;
        }
        else{
            console.log("(Light is OFF)")
            blink=true;
        }
    },4000)
})

    setTimeout(function(){
        clearInterval(GotMessage)
    }, 10000)

Promise.all([Hightemp, GotMessage])
.then(values=>{
    console.log(values)
})


const screen=new Promise((res, rej)=>{
    console.log("Device will sleep after 8 seconds")
    setTimeout(function(){
        res("")
    }, 8000)
})

screen
.then(value=>{
    console.log(value)
    return 'Device will sleep now'     // this will be paased to next then
})
.then(value2=>{
    console.log(value2)
    return 'Device slept'
})
.then(value3=>{
    console.log(value3)
})

// .finally(onFinally): Adds a handler to be called regardless of the Promise's outcome. Useful for cleanup code

const pink = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Pink light is ON'), 10000);
    });
};

const blue = (message) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${message}, Blue light is ON`), 1000);
    });
};

const white = (message) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${message}, white light is ON`), 1000);
    });
};
async function DiscoLights() {
    try {
        const result1 = await pink();
        console.log(result1); 
        
        const result2 = await blue(result1);
        console.log(result2);
        
        const result3 = await white(result2);
        console.log(result3); 
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('All lights are ON');
    }
}

DiscoLights();

const secondFloor=new Promise((res)=>{
        setTimeout(res, 4000, "2nd floor");
})
const firstFloor=new Promise((res)=>{
        setTimeout(res, 2000, "1st floor");
})

Promise.race([secondFloor, firstFloor])
.then(value=>{
    console.log(value)
})
// race will return the first promise resolved

