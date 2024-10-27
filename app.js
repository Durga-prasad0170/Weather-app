let apiUrl="https://api.openweathermap.org/data/2.5/weather?"
let apiUrl1="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let apiKey="ba558daad875d500562f0b11c2c365a3"

let cityName=document.querySelector(".city")
let temp=document.querySelector(".temp")
let wind=document.querySelector(".wind")
let hum1=document.querySelector(".humid")
let cloud=document.querySelector(".rain")

async function getData(){
   try{
    let city=document.querySelector("input").value
    const res = await fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`+`&units=metric`)
    const data = await res.json()


    cityName.innerHTML=data.name
    temp.innerHTML=Math.floor(data.main.temp)+"°C"
    hum1.innerHTML=data.main.humidity+" %"
    wind.innerHTML=Math.floor(data.wind.speed)+" km/h"

    if(data.weather[0].main=="Clouds"){
        cloud.src="./images/clouds.png"
    }else if(data.weather[0].main=="Rain"){
        cloud.src="./images/rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        cloud.src="./images/drizzle.png"
    }else if(data.weather[0].main=="Mist"){
        cloud.src="./images/mist.png"
    }else if(data.weather[0].main=="Clear"){
        cloud.src="./images/clear.png"
    }
    // console.log(data)
   }catch(error){
        window.alert("Enter a valid City Name....")
   }
}

let out = document.querySelector(".search")
out.addEventListener("click",()=>{
    getData()
})
