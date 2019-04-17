import React,{ Component } from 'react';

class TodoList extends Component {
    state = {
        todoList: []
    }

  removeTodo(e) {
      e.preventDefault();
      let todoList = this.state.todoList;
      todoList.pop();
      this.setState({
          todoList,
      });
  }
  addTodo(e) {
      e.preventDefault();

      const todoList = this.state.todoList;
      const id = todoList.length + 1;
      const newElement = {
          id,
          name: "todolist"+id,
      };
      todoList.push(newElement);
      this.setState({
          todoList,
      });
  }
  render() {
      const todos = this.state.todoList.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>
      })
    return (
      <div className="TodoList">
          <h1>Todo list testing with jest</h1>
          <h3>Add and Remove Todo list</h3>
        <ul>
            {todos}
        </ul>
        <button className="addButton" onClick={(e) => this.addTodo(e)}>Add</button>
        <button className="removeButton" onClick={(e) => this.removeTodo(e)}>Remove last Added</button>
      </div>
    );
  }
}

export default TodoList;
