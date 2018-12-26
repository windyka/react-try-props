import React, { Component } from 'react';
import Home from '../src/page/Home.js'
import './App.css'
import Abouts from './page/About.js';
import Features from './page/Feature.js';
import Navbars from './components/Navbar.js';
import Option from './page/Option1.js';
import OptionsTwo from './page/Option2.js';
import NotFound from './page/NotFound'

import { Route, Switch, } from 'react-router-dom'


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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Abouts} />
          <Route path="/feature" component={Features} />
          <Route path="/option" component={Option} />
          <Route path="/option2" component={OptionsTwo} />
          <Route component={NotFound} />
        </Switch>

      </div>
    )

  }
}

export default App;

