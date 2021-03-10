//instantiate store
const store = new Store();
const ui = new UI();
//instantiate weathe class
const { city, country } = store.getLocation();
const weather = new Weather(city, country);


document.addEventListener('DOMContentLoaded', weatherData);
document.getElementById('w-form').addEventListener('submit', e => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    if (city === ' ' || country === ' ') {
        ui.setMessage("Please provid a information")
    } else {
        weather.changeLocation(city, country);
       // ui.setLocation(city, country);
        ui.clearField()
        weatherData();
    }
})
function weatherData() {
    weather.getWeather().then(data => {
        console.log(data);
        ui.paint(data);
    }).catch(e => ui.setMessage('Your Information is not valid'))

}

