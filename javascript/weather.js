// Here is an example return from Open Weather Map API:

// Object
// base: "stations"
// clouds: {all: 75}
// cod: 200
// coord: {lon: -112.074, lat: 33.4484}
// dt: 1628541360
// id: 5308655
// main: {temp: 90.12, feels_like: 94.82, temp_min: 84.24, temp_max: 96.89, pressure: 1011, …}
// name: "Phoenix"
// sys: {type: 2, id: 2008537, country: "US", sunrise: 1628513206, sunset: 1628562050}
// timezone: -25200
// visibility: 10000
// weather: [{…}]
// wind: {speed: 4, deg: 38, gust: 8.99}


// Create Weather class
class Weather {
  constructor(city, state) {
    this.apiKey = '34de64bea12f5a54cf313c9710bf353a';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    // Get request the user input values for city and state
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&q=${this.state}&appid=${this.apiKey}&units=imperial`);  
    // Parse response to produce JavaScript object in this Store the response data in a variable called 'responseData'
    const responseData = await response.json();
    // Log the response data to the console for dev test purposes
    console.log(responseData);
      
      return responseData;
    }

    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
}
