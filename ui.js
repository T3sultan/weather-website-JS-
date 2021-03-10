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
        main_data: { temp, pressure, humidity },
        overall_data: { main, icon },
        cityName
    }) {
        const iconUrl = UI.generateIcon(icon);
        this.icon.setAttribute('src', iconUrl);
        this.feels.textContent = main;
        this.temp.textContent = `Temperature(cel) ${temp}`;
        this.pressure.textContent = `ressure(hpa) ${pressure}`;
        this.humidity.textContent = `Humidity(%) ${humidity}`;
        this.city.textContent = cityName;
    }
    static generateIcon(icon) {
        return "http://openweathermap.org/img/w/" + icon + ".png";
    }
    clearField() {
        document.getElementById('city').value = ' ';
        document.getElementById('country').value = ' ';
    }
    setMessage(msg) {
        const para = document.querySelector('.jumbotron p');
        const div = document.createElement('div')
        div.className = 'alert alert-danger';
        div.id = 'message';
        div.textContent = msg;
        UI.hideMessage();
        para.insertAdjacentElement('afterend', div);
    }
    static hideMessage() {
        setTimeout(() => {
            document.getElementById('message').remove()
        }, 2000)
    }

}