import React, { Component } from 'react'
import Navbar from './Navbar.js'

// const Header = (props) => {
//     return (
//         <div>
//             {/* <h1>Name :{props.name}</h1>
//             <h2>Alamat :{props.alamat}</h2> */}

//             <Navbar />
//         </div>
//     )

// }


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

export default Header