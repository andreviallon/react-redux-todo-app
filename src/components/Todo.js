import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: ['Clean Car', 'Do Laundry', 'Go grocery shopping']
        }
    }

    render() {
        return (
            <div className="todo-container">
                <h1 className="title-container">Todo List</h1>
                <form className="form-container">
                    <label>What would you like to do toady?</label>
                    <br />
                    <br />
                    <input type="text" className="input" />
                    <button>Submit</button>
                </form>
                <ul>{this.state.todos.map((todo, i) =>
                    <div key={i} className="flex-container">
                        <li>{todo}</li> <div className="fa fa-times"></div>
                    </div>
                )}</ul>
            </div>
        )
    }
}

export default Todo;