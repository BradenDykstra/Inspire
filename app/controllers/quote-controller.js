import QuoteService from "../services/quote-service.js";

let _qs = new QuoteService()

function _draw() {
  document.getElementById('quote').innerHTML = _qs.Quote.Template
}

// Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    _qs.addSubscribers('quote', _draw)
    _qs.getQuote()
  }

}
