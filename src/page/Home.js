import React, { Component } from 'react'
import Header from '../components/Navbar.js'
import Main from '../components/Main.js'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default Home