  // Full innerHTML content
  document.querySelector('.container').innerHTML = `
  
    <div class="row">
      <div class="shadow-lg col-md-6 mx-auto text-center bg-primary my-5 p-5 rounded">
        <h1 id="w-location"></h1>
        <h4 class="text-dark" id="w-desc"></h4>
        <h2 id="w-string"></h2>
        <img id="w-icon">
        <ul class="shadow list-group mt-3" id="w-details">
          <li class="list-group-item" id="w-feels-like"></li>
          <li class="list-group-item" id="w-wind"></li>
          <li class="list-group-item" id="w-humidity"></li>
          <li class="list-group-item" id="w-sunrise"></li>
          <li class="list-group-item" id="w-sunset"></li>
        </ul>
        <hr>
        <button type="button" class="shadow btn btn-primary" data-toggle="modal" data-target="#locModal">
          Change Location
        </button>
      </div>
    </div>
    </div>
  
    <div class="modal fade" id="locModal" tabindex="-1" aria-labelledby="locModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="locModalLabel">Choose Location</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="w-form">
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" class="form-control" id="city">
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <input type="text" class="form-control" id="state">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="w-change-btn">Save changes</button>
        </div>
      </div>
    </div>
  `;
// End innerHTML content


// Init Storage class
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather ooject
const weather = new Weather (weatherLocation.city, weatherLocation.state);
// Init UI class
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in local storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

// getWeather function
function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(error =>console.log(error));
}
