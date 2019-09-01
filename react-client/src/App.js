import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home/Home.js'
import {Sign_In} from './components/Sign_In/Sign_In.js'
import {Music} from './components/Music/Music.js'
import {CD} from './components/CD/CD.js'
import {Books} from './components/Books/Books.js'
import {ABook} from './components/ABook/ABook.js';
import {News} from './components/News/News.js'
import {Audio_Books} from './components/Audio_Books/Audio_Books.js'
import {Audio_Book} from './components/Audio_Book/Audio_Book.js'
import {Blog} from './components/Blog/Blog.js'
import {Mailing_List} from './components/Mailing_List/Mailing_List.js'
import {Author} from './components/Author/Author.js'
import {SearchBar} from './components/SearchBar/SearchBar.js'
import {BrowserRouter as Router, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import  Route from 'react-router-dom/Route';

class NoMatch extends React.Component {
	render(){
		return (
			<div className="NoMatch" >
				<h1>404 Not Found</h1>;
			</div>
		)
	}
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}



  {/*
	 <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/Sign_In' />
  )} /> 
  */}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Redirect to='/Sign_In' />
      : <Redirect to='/Sign_In' />
  )} />
)


class App extends React.Component  {

	render() {
  		return (
                <div className="App">
			<Router >
				<Route path="/" component={SearchBar}/>
				<Route path="/Home" name="ABook"  component={Home} />
				<Route path="/Music" name="ABook"  component={Music} />
				<Route path="/News" name="News"  component={News} />
				<Route path="/Author" name="ABook"  component={Author} />
				<Route path="/Audio_Books" name="Audio_Books"  component={Audio_Books} />
				<Route path="/Audio_Book" name="Audio_Book"  component={Audio_Book} />
				<Route path="/ABook/:bookName" name="ABook"  component={ABook} />
				<Route path="/CD/:CDName" name="CDName" component={CD} />
				<Route path="/Books" name="Books"  component={Books} />
			</Router>
		</div>
  		);
	}
}

export default App;
