let master_play=document.querySelector(".red_button");
let progress=document.querySelector(".progress");
let mini_play=Array.from(document.querySelectorAll(".mini_play"));
let play_btn=document.querySelector(".play_btn");
let track=Array.from(document.querySelectorAll(".track"));
let like=document.querySelectorAll(".like");
let music=new Audio("songs/s1.mp3");
let index=0;

let flag=true;
master_play.addEventListener("click",()=>{
    
    if(flag){
        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
        music.play();
    }
    else{
        master_play.classList.add("fa-circle-play");
        master_play.classList.remove("fa-circle-pause");
        music.pause();
    }
    flag=!flag;
})

music.addEventListener("timeupdate",(element)=>{
    progress.value=(music.currentTime/music.duration)*100;
    if(progress.value==100)
    {
        progress.value=0;
        master_play.classList.remove("fa-circle-pause");
        master_play.classList.add("fa-circle-play");
    }
})
progress.addEventListener("change",()=>{
    music.currentTime=(progress.value*music.duration)/100;
})

let makeAllPlay=()=>{
    mini_play.forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

mini_play.forEach((element)=>{
    let mini_play_flag=true;
   element.addEventListener("click",()=>{
    if(mini_play_flag)
    {
        makeAllPlay();
        index=parseInt(element.id);
        element.classList.remove("fa-circle-play");
        element.classList.add("fa-circle-pause");
        music.src=`songs/${index}.mp3`;
        progress.value=0;
        music.play();
        hideTrack();
        document.querySelector(`.track${index}`).style.opacity = "1";
        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
    }
    else{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
        music.pause();
        document.querySelector(`.track${index}`).style.opacity = "0";
        progress.value=0;
        music.currentTime=0;
        master_play.classList.add("fa-circle-play");
        master_play.classList.remove("fa-circle-pause");
    }
    mini_play_flag=!mini_play_flag;     
   })
})

let hideTrack=()=>{
    track.forEach((element)=>{
        element.style.opacity="0";
    })
}

let play_btn_index=1;
play_btn.addEventListener("click",playNext=()=>{
    if(play_btn_index<=5){
        hideTrack();
        music.src=`songs/${play_btn_index}.mp3`;
        document.querySelector(`.track${play_btn_index}`).style.opacity = "1";
        music.play();
        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
        play_btn_index++;
        music.addEventListener("ended",playNext);
    }
    else{
        play_btn_index=1;
        music.src=`songs/${play_btn_index}.mp3`;
        music.play();
        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
        play_btn_index++;
        music.addEventListener("ended",playNext);
    }      
})

like.forEach((element)=>{
    let like_flag=true;
    element.addEventListener("click",(e)=>{
        if(like_flag){
            e.target.classList.remove("fa-regular");
            e.target.classList.add("fa-solid");
            e.target.style.color="#E41364";
        }
        else{
            e.target.classList.remove("fa-solid");
            e.target.classList.add("fa-regular");
            e.target.style.color="white";
        }        
        like_flag=!like_flag;
    })
})

document.querySelector(".next").addEventListener("click",()=>{
    if(index<5)
    {
        index++;
        music.src=`songs/${index}.mp3`;
        music.play();
        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
        hideTrack();
        makeAllPlay();
        document.querySelector(`.mini_play${index}`).classList.add("fa-circle-pause");
        document.querySelector(`.track${index}`).style.opacity="1";
    }
    else{
        index=1;
        music.src=`songs/${index}.mp3`;
        music.play();
        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
        hideTrack();
        makeAllPlay();
        document.querySelector(`.mini_play${index}`).classList.add("fa-circle-pause");
        document.querySelector(`.track${index}`).style.opacity="1";
    }
})
    
document.querySelector(".previous").addEventListener("click",()=>{
    if(index>1)
    {
        index--;
        music.src=`songs/${index}.mp3`;
        music.play();
        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
        hideTrack();
        makeAllPlay();
        document.querySelector(`.mini_play${index}`).classList.add("fa-circle-pause");
        document.querySelector(`.track${index}`).style.opacity="1";
    }
    else{
        index=5;
        music.src=`songs/${index}.mp3`;
        music.play();
        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
        hideTrack();
        makeAllPlay();
        document.querySelector(`.mini_play${index}`).classList.add("fa-circle-pause");
        document.querySelector(`.track${index}`).style.opacity="1";
    }
})