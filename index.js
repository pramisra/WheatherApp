//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}



const weatherapp = {
    key: "7516db8682f70774ac759a86848f9855",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

//Event Listener on Key Press (Enter)
const searchInputBar = document.getElementById("inputbox");

searchInputBar.addEventListener('keypress', (event) => {

    if (event.keyCode == 13) {
        console.log(searchInputBar.value);
        getweatherReport(searchInputBar.value);
        document.querySelector(".Wheather-body").style.display = "block";
    }
});

//Get Weather Report

function getweatherReport(city) {
    fetch(`${weatherapp.baseUrl}?q=${city}&appid=${weatherapp.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

//Show Weather Report

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById("city");
    city.innerText = `${weather.name},${weather.sys.country}`

    let temp = document.getElementById("temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minmax = document.getElementById("min-max");
    minmax.innerHTML = `${Math.round(weather.main.temp_min)}&deg;C (min) / ${Math.round(weather.main.temp_max)}&deg;C (max)`

    let w = document.getElementById("weather");
    w.innerText = `${weather.weather[0].main}`

    let date = document.getElementById("date");
    let todaydate = new Date();
    date.innerText = dateManage(todaydate);

    if(w.textContent == 'Clear')
    {
        document.body.style.backgroundImage = "url('Images/clear.jpg')";
    }
    
    else if(w.textContent == 'Mist')
    {
        document.body.style.backgroundImage = "url('Images/mist.jpg')";
    }

    else if (w.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('Images/cloud.jpg')";
    }

    else if (w.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('Images/rain.jpg')";
    }

    else if (w.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('Images/snow.jpg')";
    }

    else if (w.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('Images/thunderstrom.jpg')";
    }

}

// Date Management

function dateManage(dateArgs) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArgs.getFullYear();
    let month = months[dateArgs.getMonth()];
    let date = dateArgs.getDate();
    let day = days[dateArgs.getDay()];


    return `${date} ${month} (${day}), ${year}`;
}




