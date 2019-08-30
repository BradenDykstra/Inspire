export default class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this._id = data._id
  }

  get Template() {
    let template = `<p>`
    if (this.completed) {
      template += `<strike>`
    }
    template += `${this.description}`
    if (this.completed) {
      template += `</strike>`
    }
    template += ` <i class="fas fa-check text-success icon-btn" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"></i> <i class="fas fa-times text-danger icon-btn" onclick="app.controllers.todoController.removeTodo('${this._id}')"></i></p>`
    return template
  }
}