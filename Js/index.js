let weather = {
  apiKey: 'd59b8d4d3ccd613e09bf8740789fcbe2',

  fetchWeather: (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d59b8d4d3ccd613e09bf8740789fcbe2`
    )
      .then((response) => response.json())
      .then((data) => weather.displayWeather(data))
      .catch((err) => console.log(err));
  },

  displayWeather: (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    const cities = document.querySelector('.city');
    cities.innerHTML = `Weather in ${name}`
    document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
  },
};

console.log(weather.fetchWeather('kigali'));
