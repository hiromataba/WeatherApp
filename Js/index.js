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
    document.querySelector('.city').innerHTML = `Weather in ${name}`;
    document.querySelector(
      '.weather-icon'
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector('.weather-desc').innerHTML = description;
    document.querySelector(
      '.weather-humidity'
    ).innerHTML = `Humidity: ${humidity}%`;
    document.querySelector('.temp').innerHTML = `${temp} °C`;
    document.querySelector(
      '.weather-wind'
    ).innerHTML = `Wind speed: ${speed}Km/h`;
    document.querySelector('.weather').classList.remove('loading');
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  search: () => {
    weather.fetchWeather(document.querySelector('#search').value);
  },
};

const searchBtn = document.querySelector('.submit');
searchBtn.addEventListener('click', () => {
  weather.search();
  document.querySelector('#search').value = '';
});

weather.fetchWeather('Goma');

document.querySelector('#search').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    weather.search();
    document.querySelector('#search').value = '';
  }
});
