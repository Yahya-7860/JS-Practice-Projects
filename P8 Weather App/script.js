let API_key="9b2d349e231e281c228f2451f753eae0";
let temp=document.querySelector(".temp");
let day=document.querySelector(".day");
let humid=document.querySelector(".hum");
let wind=document.querySelector(".win");
let search=document.querySelector(".searching");
let city=document.querySelector(".city_heading");
let cld=document.querySelector(".cld");


search.addEventListener("click",()=>{
  main();
})

async function main() {
  let input=document.querySelector("#input_text");
  let name_city=input.value;
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${name_city}&appid=${API_key}&units=metric`;
  const result = await fetch(url);
  const response = await result.json();

  if(response.cod=400)
  {
    cld.src="images/error1.png";
    temp.innerText="";
    humid.innerText="";
    wind.innerText="";
    input.value="";
    city.innerText="";
    day.innerText="";
  }


  temp.innerText=Math.floor(response.main.temp)+"°C";
  humid.innerText=response.main.humidity+"%";
  wind.innerText=Math.floor(response.wind.speed)+" km/h";
  input.value="";
  city.innerText=response.name;
  day.innerText=response.weather[0].main;
  if(response.weather[0].main==="Clear")
  {
    cld.src="images/sunny.png";
  }
  else if(response.weather[0].main==="Mist")
  {
    cld.src="images/mist.png";
  }
  else if(response.weather[0].main==="Clouds")
  {
    cld.src="images/clouds.png";
  }
  else if(response.weather[0].main==="Fog")
  {
    cld.src="images/fog.png";
  }
  else if(response.weather[0].main==="Rain")
  {
    cld.src="images/rain.png";
  }
  else if(response.weather[0].main==="Haze")
  {
    cld.src="images/haze.png";
  }



  console.log(response);
}