import ClockService from "../services/clock-service.js";

let _cs = new ClockService()

function _draw() {
  document.getElementById('clock').innerHTML = _cs.Clock.Template
  if (_cs.Clock.hours < 12 && _cs.Clock.hours > 3) {
    document.getElementById('time').innerHTML = "Good Morning, Braden"
  } else if (_cs.Clock.hours < 19 && _cs.Clock.hours > 12) {
    document.getElementById('time').innerHTML = "Good Afternoon, Braden"
  } else {
    document.getElementById('time').innerHTML = "Good Evening, Braden"
  }
}

export default class ClockController {
  constructor() {
    _cs.addSubscriber('clock', _draw)
    _cs.getClock()
    setInterval(_cs.getClock, 100)
  }
}