import Image from '../models/image.js'

let _state = {
	img: {}
}

let _subscribers = {
	img: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn());
}

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});


// create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	constructor() {

	}

	getImage() {
		imgApi.get()
			.then(res => {
				_setState('img', res.data)
			})
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get Image() {
		return _state.img
	}

}
