import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';

import './Todo.css';

class Todos extends Component {

    componentWillMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="todo-container">
                <h1 className="title-container">Todo List</h1>
                <div className="form-container">
                    <label>What would you like to do toady?</label>
                    <br />
                    <br />
                    <input type="text" name="title" className="input" />
                    <button>Add</button>
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
    fetchTodos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos.items
});

export default connect(mapStateToProps, { fetchTodos })(Todos);