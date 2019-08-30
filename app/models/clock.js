export default class Clock {
  constructor() {
    this.date = new Date()
    this.hours = this.date.getHours()
    this.minutes = this.date.getMinutes()
  }

  get Template() {
    return `<h1>${this.hours}:${this.minutes}`
  }
}