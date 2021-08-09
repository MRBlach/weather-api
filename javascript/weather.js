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
