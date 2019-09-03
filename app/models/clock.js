export default class Clock {
  constructor() {
    this.date = new Date()
    this.hours = this.date.getHours()
    this.minutes = this.date.getMinutes()
    // this.name = swal
  }

  get Template() {
    let template = `<h1>${this.hours}:`
    if (this.minutes < 10) {
      template += `0`
    }
    template += `${this.minutes}`
    return template
  }
}