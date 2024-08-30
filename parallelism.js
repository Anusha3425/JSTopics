// Parallelism refers to executing multiple tasks simultaneously. 
// JavaScript itself does not support parallelism within the same thread, 
// but it can achieve parallelism using Web Workers, which run in the background and are separate from the main thread.

self.onmessage=function(event){
    const data=event.data
    let result=0

    for(let i=0;i<100;i++){
        result+=i
    }

    self.postMessage(result)
}