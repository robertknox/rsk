import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Music} from './components/Music/Music.js'
import {Books} from './components/Books/Books.js'
import {News} from './components/News/News.js'
import {Audio_Books} from './components/Audio_Books/Audio_Books.js'
import {Mailing_List} from './components/Mailing_List/Mailing_List.js'
import {Author} from './components/Author/Author.js'
import {SearchBar} from './components/SearchBar/SearchBar.js'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import  Route from 'react-router-dom/Route';


class App extends React.Component  {

	render() {
  		return (
                <div className="App">
			<Router >
			<div>
				<SearchBar />
                        </div>

				<Route path="/Music" component={Music}/>
				<Route path="/Author" component={Author}/>
				<Route path="/News" component={News}/>
				<Route path="/Books" component={Books}/>
				<Route path="/Audio_Books" component={Audio_Books}/>
				<Route path="/Mailing_List" component={Mailing_List}/>
			</Router>

			<div>
				<h1> My site </h1>
			</div>
		</div>
  		);
	}
}

export default App;
