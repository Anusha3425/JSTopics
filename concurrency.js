console.log("Concurrency in JS")

setTimeout(function(){
    console.log("Next song is ABC")
}, 2000)

setTimeout(function(){
    console.log("Current song is CDE")
},10000)

const addSong=new Promise((res, rej)=>{
    setTimeout(function(){
        res("123 will play next");
    }, 2000)
})

const playSong=new Promise((res, rej)=>{
    setTimeout(function(){
        res('ABC song is playing')
    }, 6000)
})

addSong.then(value=>console.log(value));
playSong.then(value=>console.log(value));

console.log('Event loop will handle tasks in a non-blocking manner.')