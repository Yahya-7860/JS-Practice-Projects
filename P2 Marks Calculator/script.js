const calc_btn=document.querySelector(".calc-btn");
const math=document.querySelector(".math");
const phy=document.querySelector(".physics");
const chem=document.querySelector(".chemistry");
const bio=document.querySelector(".bio");

const result=document.querySelector(".result");

calc_btn.addEventListener("click",()=>{
    let m=Number(math.value);
    let p=Number(phy.value);
    let c=Number(chem.value);
    let b=Number(bio.value);

    const percentage=parseFloat(Math.floor((m+p+c+b)/4));
    if(m===0 || p===0 || c===0 || b===0)
    {
        result.innerHTML="Input Field Cannot be blank";
        result.classList.add("red");
    }
    else if(m<0 || p<0 || c<0 || b<0 || m>100 || p>100 || c>100 || b>100){
        result.innerHTML="WARNING ! Marks must be from 0 to 100.";
        result.classList.add("red");

        if(m<0 || m>100)
            math.style.border="0.2rem solid red";
        if(p<0 || p>100)
            phy.style.border="0.2rem solid red";
        if(c<0 || c>100)
            chem.style.border="0.2rem solid red";
        if(b<0 || b>100)
            bio.style.border="0.2rem solid red";
    }
    else{
        result.classList.remove("red");
        math.style.border="none";
        bio.style.border="none";
        chem.style.border="none";
        phy.style.border="none";


        if(percentage>=90 && percentage<=100)
        {
            result.innerHTML="Great ! You got A+ grade with " +percentage+"%."
        }
        else if(percentage>=80 && percentage<=89)
        {
            result.innerHTML="Great ! You got B grade with " +percentage+"%."
        }
        else if(percentage>=50 && percentage<=79)
        {
            result.innerHTML="Well ! You got C grade with " +percentage+"%."
        }
        else
        {
            result.innerHTML="OK Result ! You got D grade with only " +percentage+"%."
        }
    }
})