class Weather {
  constructor(city, state) {
    this.apiKey = '34de64bea12f5a54cf313c9710bf353a';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&q=${this.state}&appid=${this.apiKey}&units=imperial`);  
    
      const responseData = await response.json();
      console.log(responseData);
      
      return responseData;
    }

    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
}