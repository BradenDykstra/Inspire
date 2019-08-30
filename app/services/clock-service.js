import Clock from '../models/clock.js'

let _state = {
  clock: {}
}

let _subscribers = {
  clock: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class ClockService {
  constructor() {

  }

  get Clock() {
    return _state.clock
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  getClock() {
    _setState('clock', new Clock)
  }
}