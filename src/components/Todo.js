import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos, addTodo, removeTodo, clearAllTodos } from '../actions/todoActions';

import './Todo.css';

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onClearAllTodos = this.onClearAllTodos.bind(this);
    }

    componentWillMount() {
        this.props.fetchTodos();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newTodo) {
            this.props.todosList.unshift(nextProps.newTodo);
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onAddTodo(e) {
        console.log(this);
        e.preventDefault();

        const newTodo = this.state.newTodo;
        const trimedTodo = newTodo.trim();

        if (trimedTodo === '') return;

        const newTodosList = [trimedTodo, ...this.props.todos];

        this.props.addTodo(newTodosList);
        this.setState({ newTodo: '' });
    }

    onRemoveTodo(i) {
        const newTodosList = [...this.props.todos];
        newTodosList.splice(i, 1);

        this.props.removeTodo(newTodosList);
        console.log(this);
    }

    onClearAllTodos() {
        const newTodosList = [];
        this.props.clearAllTodos(newTodosList);
    }

    render() {
        return (
            <div className="todo-container">
                <h1 className="title-container">Todo List</h1>
                <div className="form-container">
                    <label>What would you like to do toady?</label>
                    <br />
                    <br />
                    <input type="text" name="newTodo" className="input" onChange={this.onChange} value={this.state.newTodo} />
                    <button onClick={this.onAddTodo}>Add</button>
                </div>
                <ul>{this.props.todos.map((todo, i) =>
                    <div key={i} className="flex-container">
                        <li>{todo}</li> <div className="fa fa-times" onClick={() => this.test}></div>
                    </div>
                )}</ul>
                <button className="clear-all" onClick={this.onClearAllTodos}>Clear all</button>
            </div>
        )
    }
}

Todos.propsTypes = {
    fetchTodos: PropTypes.func.isRequired,
    todosList: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos.todosList
});

export default connect(mapStateToProps, {
    fetchTodos,
    addTodo,
    removeTodo,
    clearAllTodos
})(Todos);
