import React, { Component } from 'react';
import Home from '../src/page/Home.js'
import './App.css'
import Abouts from './page/About.js';
import Features from './page/Feature.js';
import Navbars from './components/Navbar.js';
import Option from './page/Option1.js';
import OptionsTwo from './page/Option2.js';

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

    // const { page } = this.state
    // const { changePage } = this

    return (
      <div>
        <Navbars Page={this.changePage} />
        {this.state.page === "Home" || this.state.page === "Reset" ? (<Home />) : this.state.page === "About" ? (<Abouts />) : this.state.page === "Feature" ? (<Features />) : this.state.page === "Option" ? (<Option />) : this.state.page === "OptionTwo" ? (<OptionsTwo />) : <h1>404 Not Found!</h1>}
      </div>
    )

  }
}

export default App;

