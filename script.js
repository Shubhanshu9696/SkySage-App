const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fd4b93a1f8mshf88f8ffd5c034e0p10c90djsn4185276d4d3b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}
const getWeather=(city) =>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        cityName.innerHTML = city;
        console.log(response);

        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Varanasi");

const cities = ["Hyderabad", "Delhi", "Lucknow", "Kolkata"];

function filldata( city ){

    const temp = document.getElementById(city);
    // console.log(temp.childNodes.length;)
    // for(let i = 1; i<21; i++){
    //     console.log(temp.childNodes[i]);
    // }

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        temp.childNodes[3].innerHTML = response.cloud_pct
        temp.childNodes[5].innerHTML = response.feels_like
        temp.childNodes[7].innerHTML= response.humidity
        temp.childNodes[9].innerHTML= response.max_temp
        temp.childNodes[11].innerHTML= response.min_temp
        temp.childNodes[13].innerHTML = response.sunrise
        temp.childNodes[15].innerHTML= response.sunset
        temp.childNodes[17].innerHTML= response.temp
        temp.childNodes[19].innerHTML= response.wind_degrees
        temp.childNodes[21].innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

cities.forEach((city)=>{
    filldata(city);
})

