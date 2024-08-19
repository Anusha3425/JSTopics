let video=document.getElementById("video");
let audio=document.getElementById("audio");



function makeWide(){
    video.width=800;
}

function makeNormal(){
    video.width=500;
}

function playPause(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}
