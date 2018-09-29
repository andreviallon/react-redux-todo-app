import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: ['Clean Car', 'Do Laundry', 'Go grocery shopping'],
            newTodo: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onChange(e) {
        this.setState({ newTodo: [e.target.value] });
    }

    onAddTodo() {
        const newTodo = this.state.newTodo;

        if (newTodo === '') return;

        this.setState({ todos: [newTodo, ...this.state.todos] });
        this.setState({ newTodo: '' });
    }

    onRemoveTodo(i) {
        let newTodos = [...this.state.todos];

        newTodos.splice(i, 1);

        this.setState({ todos: newTodos });
    }

    render() {
        return (
            <div className="todo-container">
                <h1 className="title-container">Todo List</h1>
                <div className="form-container">
                    <label>What would you like to do toady?</label>
                    <br />
                    <br />
                    <input type="text" name="title" className="input" onChange={this.onChange} value={this.state.newTodo} />
                    <button onClick={this.onAddTodo}>Add</button>
                </div>
                <ul>{this.state.todos.map((todo, i) =>
                    <div key={i} className="flex-container">
                        <li>{todo}</li> <div className="fa fa-times" onClick={() => this.onRemoveTodo(i)}></div>
                    </div>
                )}</ul>
            </div>
        )
    }
}

export default Todo;