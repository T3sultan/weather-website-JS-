//API https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=0d931a97409e61ebe2d94c1c67085563&units=metric
class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.appid = '0d931a97409e61ebe2d94c1c67085563';
    }
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.appid}&units=metric`)
        const responseData = await response.json();
        return {
            main_data: responseData.main,
            overall_data: responseData.weather[0],
            cityName: responseData.name,

        };
    }
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

}
