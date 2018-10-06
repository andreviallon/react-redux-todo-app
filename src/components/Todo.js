import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos, addTodo } from '../actions/todoActions';

import './Todo.css';

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
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
        e.preventDefault();

        const newTodo = this.state.newTodo;
        const trimedTodo = newTodo.trim();

        if (trimedTodo === '') return;

        const newTodosList = [trimedTodo, ...this.props.todos];

        this.props.addTodo(newTodosList);
        this.setState({ newTodo: '' });
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
                        <li>{todo}</li> <div className="fa fa-times"></div>
                    </div>
                )}</ul>
                <button className="clear-all">Clear all</button>
            </div>
        )
    }
}

Todos.propsTypes = {
    fetchTodos: PropTypes.func.isRequired,
    todosList: PropTypes.array.isRequired,
    newTodo: PropTypes.string
}

const mapStateToProps = state => ({
    todos: state.todos.todosList,
    newTodo: state.todos.todo
});

export default connect(mapStateToProps, { fetchTodos, addTodo })(Todos);
