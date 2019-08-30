export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }

  get Template() {
    return `<h5>${this.body}</h5>
        <h6>~${this.author}</h6>`
  }
}