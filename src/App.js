import React, { Component } from 'react';
import Home from '../src/page/Home.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header name=' Windy' alamat=" Cilacap" /> */}
        <Home />

      </div>
    );
  }
}

export default App;

