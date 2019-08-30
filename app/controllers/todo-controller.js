import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

// Create the render function
function _drawTodos() {
	let todos = _todoService.Todo
	let template = ''
	todos.forEach(t => {
		template += t.Template
	})
	document.getElementById('todos').innerHTML = template
}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		// Remember to register your subscribers
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			// build the todo object from the data that comes into this method
			description: form.description.value,
			completed: false
		}
		_todoService.addTodo(todo)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}



}
