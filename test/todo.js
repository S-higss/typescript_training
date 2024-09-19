import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


// export default Todo;
// class Todo extends Component {
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: '',
    };
  }
  onInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  addTodo = () => {
    const { todos, name } = this.state;
    if (todos[todos.length - 1] === '') {
      todos.pop();
    }
    this.setState({
      todos: [...todos, name],
      name: '',
    });
  }
  deleteTodo = (index) => {
    const { todos, name } = this.state;
    todos.splice(index, 1);
    this.setState({
      todos: todos,
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <input type="text" onInput={this.onInput} />
        <button onClick={this.addTodo}>Submit</button>
        <ul>
          {todos.map((todo, index) => <li key={index}>
            {todo}
            <button onClick={() => this.deleteTodo(index)}>Delete</button>
          </li>)}
        </ul>
      </div>
    );
  }
}
