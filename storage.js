class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Portland';
    this.defaultState = 'OR';
  }

  getLocationData() {
    localStorage.getItem('city') === null
      ? (this.city = this.defaultCity)
      : (this.city = localStorage.getItem('city'))
  
    localStorage.getItem('state') === null
      ? (this.state = this.defaultState)
      : (this.state = localStorage.getItem('state'))
  
    return {
      city: this.city,
      state: this.state
    }
  }
  

   setLocationData(city, state) {
    localStorage.setItem('city', city)
    localStorage.setItem('state', state)
  }
}




// getLocationData() {
//   if(localStorage.getItem('city') === null) {
//     this.city = this.defaultCity;
//   } else {
//     this.city = localStorage.getItem('city');
//   }

//   if(localStorage.getItem('state') === null) {
//     this.state = this.defaultState;
//   } else {
//     this.state = localStorage.getItem('state');

//     return {
//       city: this.city,
//       state: this.state
//     }
//   }
// }