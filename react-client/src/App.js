import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar    from './components/SearchBar/SearchBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
	  <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
