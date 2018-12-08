import React, { Component } from 'react'
import Header from '../components/Header.js'
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