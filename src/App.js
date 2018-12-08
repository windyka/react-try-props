import React, { Component } from 'react';
import Home from '../src/page/Home.js'
import './App.css'
import Abouts from './page/About.js';
import Features from './page/Feature.js';
import Navbar from './components/Navbar.js';
import OptionOne from './page/Option1.js';
import OptionTwo from './page/Option2.js';

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

    if (page === "Home" || page === "Reset") {
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
    } else if (page === "OptionOne") {
      return (
        <div>
          <Navbar changePage={changePage} />
          <OptionOne />
        </div>
      )
    } else if (page === "OptionTwo") {
      return (
        <div>
          <Navbar changePage={changePage} />
          <OptionTwo />
        </div>
      )
    } else {
      return (<h1>Not Found!</h1>)
    }

  }
}

export default App;

