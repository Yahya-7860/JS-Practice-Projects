const setIcon=document.getElementById("set");
const content=document.querySelector(".input");
let bool=true;
const submitbtn=document.querySelector("#submit");
const input_text=document.querySelector("#input-text");
const counter=document.getElementById("counter");

const year=document.querySelector("#year");
const month=document.querySelector("#month");
const day=document.querySelector("#day");
const hour=document.querySelector("#hour");
const min=document.querySelector("#minute");
const sec=document.querySelector("#second");

const blank=document.querySelector(".blank");

setIcon.addEventListener("click",()=>{
    if(bool===true)
    {
        content.classList.remove("hide");
    }
    else{
        content.classList.add("hide");
    }
    bool=!bool;
});

const timer=()=>{
    const date=input_text.value;
    const dob_date=new Date(date);
    const cur_date=new Date();
    
    const diffInMilliseconds = cur_date - dob_date;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = cur_date.getMonth() - dob_date.getMonth();
    const diffInYears = cur_date.getFullYear() - dob_date.getFullYear();

    year.innerHTML = diffInYears; 
    month.innerHTML = diffInMonths;
    day.innerHTML = diffInDays;
    hour.innerHTML = diffInHours % 24;
    min.innerHTML = diffInMinutes % 60;
    sec.innerHTML = diffInSeconds % 60;
};
const timeUpdate=()=>{
    const date=input_text.value;
    const dob_date=new Date(date);
    const cur_date=new Date();
    
    if(date)
    {
        blank.innerHTML="";
        counter.classList.remove("hide");
        setInterval(timer, 1000);
    }
    else
    {
        blank.innerHTML="Enter DOB First ! ";
    }
    
}
submitbtn.addEventListener("click",timeUpdate)