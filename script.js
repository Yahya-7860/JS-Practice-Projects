let masterPlay=document.querySelector(".masterPlay");
let music=new Audio('/song/halka-halka.mp3');
let progress=document.querySelector("#progress");
let Allsongs=Array.from(document.querySelectorAll(".item"));

let s_name=document.getElementById("s_name");
s_name.innerText="Yeh jo Halka Halka";

let songs=[{songName:"Yeh jo Halka Halka", filePath:"/song/1.mp3", coverPath:"/images/cover1.jpg"},
{songName:"nusrat fateh ali khan 2", filePath:"/song/2.mp3", coverPath:"/images/cover2.jpg"},
{songName:"nusrat fateh ali khan 3", filePath:"/song/3.mp3", coverPath:"/images/cover3.jpg"},
{songName:"nusrat fateh ali khan 4", filePath:"/song/4.mp3", coverPath:"/images/cover4.jpg"},
{songName:"nusrat fateh ali khan 5", filePath:"/song/5.mp3", coverPath:"/images/cover5.jpg"},
{songName:"nusrat fateh ali khan 6", filePath:"/song/6.mp3", coverPath:"/images/cover6.jpg"},
{songName:"nusrat fateh ali khan 7", filePath:"/song/7.mp3", coverPath:"/images/cover7.jpg"}]

let index=0;
masterPlay.addEventListener("click",()=>{

    if(music.paused || music.currentTime<=0)
    {
        music.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else
    {
        music.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
    }
})

music.addEventListener("timeupdate",()=>{
    let run=(music.currentTime/music.duration)*100;
    progress.value=run;
})

progress.addEventListener("change",()=>{
    music.currentTime=(progress.value*music.duration)/100;
})

Allsongs.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("s_name")[0].innerText=songs[i].songName;
})

let makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("miniPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("miniPlay")).forEach((element)=>{
    let flag=true;
    element.addEventListener("click",(e)=>{
        if(flag)
        {
            makeAllPlay();
            index=parseInt(e.target.id);
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            masterPlay.classList.add("fa-circle-pause");
            music.src=`song/${index}.mp3`;
            music.currentTime=0;
            music.play();
            s_name.innerText=songs[index].songName;
        }
        else
        {
            e.target.classList.add("fa-circle-play");
            e.target.classList.remove("fa-circle-pause");
            music.pause();
            masterPlay.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");
        }
        flag=!flag;
    })
})

document.querySelector(".next").addEventListener("click",()=>{
    if(index>=6)
    {
        index=0;
    }
    else{
        index+=1;
    }
    music.src=`song/${index}.mp3`;
    music.currentTime=0;
    music.play();
    s_name.innerText=songs[index].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
document.querySelector(".previous").addEventListener("click",()=>{
    if(index==0)
    {
        index=6;
    }
    else{
        index-=1;
    }
    music.src=`song/${index}.mp3`;
    music.currentTime=0;
    music.play();
    s_name.innerText=songs[index].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})