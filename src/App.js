import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo App</h1>
        </header>
        <div className="container">
          <Todo></Todo>
        </div>
      </div>
    );
  }
}

export default App;
