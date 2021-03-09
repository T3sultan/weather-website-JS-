//API https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=0d931a97409e61ebe2d94c1c67085563&units=metric
class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.appid = '0d931a97409e61ebe2d94c1c67085563';

    }
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.appid}&units=metric`)
           const responseData=await response.json();
        return {
            main_data: responseData.main,
            overall_data: responseData.weather[0],
            cityName:responseData.name
            
        };
    }
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

}

class UI {
    constructor() {
        this.icon = document.getElementById('w-icon');
        this.feels = document.getElementById('w-feels');
        this.temp = document.getElementById('temp');
        this.pressure = document.getElementById('pressure');
        this.humidity = document.getElementById('humidity');
        this.city = document.getElementById('w-city');
       
    }
    paint({
         
        main_data:{temp,pressure,humidity},
        overall_data:{main,icon},
        cityName
    }) {
        const iconUrl = UI.generateIcon(icon);
        this.icon.setAttribute('src',iconUrl);
        this.feels.textContent =main;
        this.temp.textContent = `Temperature(cel) ${temp}`;
        this.pressure.textContent =`ressure(hpa) ${pressure}`;
        this.humidity.textContent = `Humidity(%) ${humidity}`;
        this.city.textContent=cityName;
       
    }
    static generateIcon(icon){
        return  "http://openweathermap.org/img/w/" + icon + ".png";
    }
    clearField(){
        document.getElementById('city').value =' ';
        document.getElementById('country').value =' ';
    }

}

//instantiate weathe class
const weather = new Weather('Comilla', 'BD');


document.getElementById('w-form').addEventListener('submit',e=>{
    e.preventDefault();
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  if (city=== ' ' || country ===' ') {
      console.log("Please provid a information")
  }else{
      weather.changeLocation(city, country);
      ui.clearField()
      weatherData();
  }
 
})
const ui = new UI();

function weatherData(){
    weather.getWeather().then(data => {
        console.log(data);
        ui.paint(data);
    });

}
