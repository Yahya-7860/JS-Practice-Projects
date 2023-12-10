setInterval(() => {
    d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();

    let hour=document.querySelector(".hour");
    let minute=document.querySelector(".minute");
    let second=document.querySelector(".second");
    let time=document.querySelector(".time_h1");
    
    let hrotation=30*h + m/2;
    let mrotation=6*m;
    let srotation=6*s;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    
    time.innerHTML=`${0}${h-12}:${m}:${s}`;

}, 1000);   