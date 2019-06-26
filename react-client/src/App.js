import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar    from './components/SearchBar/SearchBar.js'
import Author    from './components/Author/Author.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>RobertSelkirkKnox.com</h2>
	  <h3>Official WebSite</h3>
	  <SearchBar />  
	  <Author />  
        </div>
      </div>
    );
  }
}

export default App;
