import ClockService from "../services/clock-service.js";

let _cs = new ClockService()

function _draw() {
  document.getElementById('clock').innerHTML = _cs.Clock.Template
}

export default class ClockController {
  constructor() {
    _cs.addSubscriber('clock', _draw)
    _cs.getClock()
    setInterval(_cs.getClock, 100)
  }
}