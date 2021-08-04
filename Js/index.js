let weather = {
  apiKey: 'd59b8d4d3ccd613e09bf8740789fcbe2',
  fetchWeather: (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d59b8d4d3ccd613e09bf8740789fcbe2`
    )
      .then((response) => response.json())
      .then((data) => displayWeather(data))
      .catch((err)=> console.log(err));
  },
  displayWeather: (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed);
  },
};

console.log(weather.fetchWeather('kigali'));
