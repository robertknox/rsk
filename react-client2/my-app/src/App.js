import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Root} from './components/Root/Root.js'
import {Music} from './components/Music/Music.js'
import {Author} from './components/Author/Author.js'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import  Route from 'react-router-dom/Route';

const User = () => {
 	return ( <h1> User </h1> );
}

class App extends React.Component  {

	render() {
  		return (
			<Router >
			<div>
				<NavLink to="/music"> Music </NavLink>
				<NavLink to="/author"> Author </NavLink>
                        </div>

				<Route path="/music" component={Music}/>
				<Route path="/author" component={Author}/>
				<Route path="/user" component={User}/>
			</Router>
  		);
	}
}

export default App;
