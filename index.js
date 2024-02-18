const apikey="f5ca5c4e8ec14ef21f303ece361ece08";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button")
const url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apikey}`

const weatherapp= async(city)=>{
    //console.log(city);
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const data= await fetch(url);
    const res= await data.json();
    console.log(res);
    document.querySelector(".city-name").innerHTML=res.name;
    document.querySelector(".temp").innerHTML=Math.round(res.main.temp-273)+"°C";
    document.querySelector(".humidity").innerHTML=res.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=res.wind.speed+ "km/h";
};

searchbtn.addEventListener("click", ()=>{
    console.log(searchbox.value);
    weatherapp(searchbox.value);
})