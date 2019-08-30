import Quote from '../models/quote.js'

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn());
}

// create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {
	constructor() {

	}

	addSubscribers(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getQuote() {
		_quoteApi.get()
			.then(res => {
				_setState('quote', new Quote(res.data.quote))
			})
	}

	get Quote() {
		return _state.quote
	}

}
