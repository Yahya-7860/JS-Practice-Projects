let doremon=document.querySelector(".doremon");
let mice=document.querySelector(".mice");
let end=document.querySelector(".end");
let score=document.querySelector(".score");
let start=document.querySelector(".start");

let themeSong=new Audio('music/doremon.mp3');
let sad=new Audio('music/sad.mp3');

start.addEventListener("click",()=>{
    themeSong.play();
})

let run=function(){
    mice.classList.add("mice_ani");
    let gameScore=0;
flag=true;

document.onkeydown=function(event){
    let code=event.keyCode;
    if(code===38)
    {
        doremon.classList.add("dinoAnimate");
        setTimeout(() => {
            doremon.classList.remove("dinoAnimate");
        }, 830);
        
    }
    else if(code===39)
    {
        let left_move=parseInt(doremon.style.left)||0;
        let new_side=left_move+5;
        doremon.style.left=new_side+'rem';
    }
    else if(code===37)
    {
        let left_move=parseInt(doremon.style.left)||0;
        let new_side=left_move-5;
        doremon.style.left=new_side+'rem';
    }    
}
setInterval(() => {
    dx=parseInt(window.getComputedStyle(doremon).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(doremon).getPropertyValue('bottom'));

    mx=parseInt(window.getComputedStyle(mice).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(mice).getPropertyValue('bottom'));

    disX=Math.abs(dx-mx);
    disY=Math.abs(dy-my);
    console.log(disX,disY);
    if(disX<130 && disY<40)
    {
        end.classList.remove('disp');
        mice.classList.remove('mice_ani');
        doremon.style.backgroundImage='url("images/4.png")';
        themeSong.pause();
        sad.play();
        setTimeout(() => {
            sad.pause();
        }, 6000);

    }  
    else if(disX<42 && flag)  
    {
        gameScore++;
        fun(score);
        flag=false;
        setTimeout(() => {
            flag=true;
        }, 1000);
    }
}, 100);

let fun=function(s){
    score.innerHTML='Score : '+ gameScore;        
}

}

