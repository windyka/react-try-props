import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './Navbar.css'

import { Link, } from 'react-router-dom'

export default class Navbars extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Link to="/">
                        <NavbarBrand>ReactBook</NavbarBrand>
                    </Link>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/about">
                                    <NavLink>About</NavLink>
                                </Link>

                            </NavItem>
                            <NavItem>
                                <Link to="/feature">
                                    <NavLink>Features</NavLink>
                                </Link>

                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to="/option">
                                        <DropdownItem>Option 1</DropdownItem>
                                    </Link>

                                    <Link to="/option2">
                                        <DropdownItem> Option 2</DropdownItem>
                                    </Link>

                                    <DropdownItem divider />
                                    <Link to="/not-found">
                                        <DropdownItem>Not Found</DropdownItem>
                                    </Link>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}