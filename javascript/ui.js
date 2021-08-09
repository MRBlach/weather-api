// Create UI class
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
    this.wind = document.getElementById('w-wind')
  }

  // Output weather to UI
  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + '℉';
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.sunrise.innerHTML = `<b>Sunrise:</b> ${new Date(weather.sys.sunrise*1000).toLocaleTimeString()}`;
    this.sunset.innerHTML = `<b>Sunset:</b> ${new Date(weather.sys.sunset*1000).toLocaleTimeString()}`;
    this.humidity.innerHTML = `<b>Relative Humidity:</b> ${weather.main.humidity}%`;
    this.feelsLike.innerHTML = `<b>Feels Like:</b> ${weather.main.feels_like} '℉'` ;  
    this.wind.innerHTML = `<b>Wind:</b> ${weather.wind.speed}mph`;
  }
}

