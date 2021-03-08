//API https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=0d931a97409e61ebe2d94c1c67085563&units=metric
class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.appid = '0d931a97409e61ebe2d94c1c67085563';

    }
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.appid}&units=metric`)
            .then(data => data.json())
        return {
            main_data: response.main,
            overall_data: response.weather[0],
            sys_data: response.sys
        }
    }
    // setLocation(city, country) {
    //     this.city = city;
    //     this.country = country;
    // }

}
//instantiate weathe class
const weather = new Weather('Rongpur', 'BD');
class UI {
    constructor() {
        this.icon = document.getElementById('w-icon');
        this.feels = document.getElementById('w-feels');
        this.temp = document.getElementById('temp');
        this.pressure = document.getElementById('pressure');
        this.humidity = document.getElementById('humidity');
    }
    paint({ main_data:{temp,pressure,humidity}, overall_data:{main,icon}}) {
        const iconUrl = UI.generateIcon(icon);
        this.icon.setAttribute('src',iconUrl)
        this.feels.textContent =main;
        this.temp.textContent = `Temperature(cel) ${temp}`;
        this.pressure.textContent =`ressure(hpa) ${pressure}`;
        this.humidity.textContent = `Humidity(%) ${humidity}`;
    }
    static generateIcon(icon){
        return  "http://openweathermap.org/img/w/" + icon + ".png";
    }

}

const ui = new UI('London', 'UK');

weather.getWeather().then(data => {
    console.log(data);
    ui.paint(data)
})

