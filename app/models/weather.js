export default class Weather {
  constructor(data) {

    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    // You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.floor((this.kelvin - 273.15) * (9 / 5) + 32)
    this.celsius = Math.floor(this.kelvin - 273.15)
    this.icon = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'
    this.desc = data.weather[0].main

  }

  get Template() {
    return `<h3>${this.city}</h3>
        <img src='${this.icon}'>
        <h5>${this.desc}</h5>
        <h4>${this.fahrenheit}°F</h4>
        <h4>${this.celsius}°C</h4>
        <h4>${Math.floor(this.kelvin)}K</h4>
        `
  }
}