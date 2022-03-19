//Getting value from the user
let inputCity=document.getElementById("enterCity");

inputCity.addEventListener("keyup",function(){
if(event.key==="Enter")
    getResult(event.target.value);
    
    
});
//api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API key}
const api={
    url:"http://api.openweathermap.org/data/2.5/weather?q=",
    key:"a88d8e18f57aaa5612424697139be507"
}

function getResult(cityName) {
    
    fetch(`${api.url}${cityName}&units=metric&appid=${api.key}`)
    .then((response) => response.json())
    .then((responseValue) => setWeatherDetails(responseValue))
}

function setWeatherDetails(cityWeatherDetails) {
    let cityName=document.getElementById("outputCity");
    let date=document.getElementById("outputDate");
    let temperature=document.getElementById("outputTemp");
    let weatherType=document.getElementById("weatherType");
    let highLow=document.getElementById("highLow");

    cityName.innerText=cityWeatherDetails.name+","+cityWeatherDetails.sys.country;
    
    date.innerText=foramtDate();
    
    temperature.innerHTML=Math.round(cityWeatherDetails.main.temp)+'°c';
    let high=Math.floor(cityWeatherDetails.main.temp_max);
    let low=Math.floor(cityWeatherDetails.main.temp_min);
    weatherType.innerText=cityWeatherDetails.weather[0].main;
    highLow.innerText=high+'°c'+" / "+low+'°c';
}

function foramtDate() {
    let months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

    let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    
    let currentDate=new Date();
    let day=days[currentDate.getDay()];
    let month=months[currentDate.getMonth()];
    let year=currentDate.getFullYear();
    let date=currentDate.getDate();

    
    return `${day} ${date} ${month} ${year}`
}