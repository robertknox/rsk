import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar    from './components/SearchBar/SearchBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>RobertSelkirkKnox.com</h2>
	  <h3>Official WebSite</h3>
	  <SearchBar />  
        </div>
      </div>
    );
  }
}

export default App;
