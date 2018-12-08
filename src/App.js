import React, { Component } from 'react';
import Home from '../src/page/Home.js'
import './App.css'
import Abouts from './page/About.js';
import Features from './page/Feature.js';
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    page: "Home"
  }

  changePage = (layout) => {
    this.setState({
      page: layout
    })
  }

  render() {

    const { page } = this.state
    const { changePage } = this

    if (page === "Home") {
      return (
        <div>
          <Navbar changePage={changePage} />
          <Home />
        </div>
      )
    } else if (page === "About") {
      return (
        <div>
          <Navbar changePage={changePage} />
          <Abouts />
        </div>
      )
    } else if (page === "Feature") {
      return (
        <div>
          <Navbar changePage={changePage} />
          <Features />
        </div>
      )
    } else {
      return (<h1>Not Found!</h1>)
    }

  }
}

export default App;

