import React, { Component } from 'react';
import Home from '../src/page/Home.js'
import './App.css'
import Abouts from './page/About.js';
import Features from './page/Feature.js';

class App extends Component {
  state = {
    page: "Home"
  }
  render() {
    const { page } = this.state

    if (page === "Home") {
      return (
        <Home />
      )
    } else if (page === "About") {
      return (
        <Abouts />)
    } else if (page === "Feature") {
      return (
        <Features />
      )
    } else {
      return (<h1>Not Found!</h1>)
    }

  }
}

export default App;

