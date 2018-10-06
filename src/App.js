import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import Store from './store';

import Todos from './components/Todo';

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">React / Redux Todo App</h1>
					</header>
					<div className="container">
						<Todos />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
