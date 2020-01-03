import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'rsuite';
import { Icon } from 'rsuite';


import 'rsuite/dist/styles/rsuite-default.css';
import './Navigation.css'

class Navigation extends React.Component {

    constructor () {
        super()
        this.state = {
            activeKey: "1"
        };
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        })
    }

    render () {
        return (
            <Navbar appearance="inverse">
                 <Navbar.Header className="logo-container">
                    <Icon icon='gamepad' size="3x" />
                </Navbar.Header>
                <Navbar.Body>
                    <Nav onSelect={this.handleSelect.bind(this)} activeKey="1">
                        <Link to='/'>
                            <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                                Home
                            </Nav.Item>
                        </Link>
                        <Link to='/date-filter'>
                            <Nav.Item eventKey="2" icon={<Icon icon="calendar-check-o" />}>
                                Date filter
                            </Nav.Item>
                        </Link>
                    </Nav>

                    <Nav pullRight>
                        <Link to='/search-user'>
                            <Nav.Item eventKey="3" icon={<Icon icon="user" />}>
                                Search user
                            </Nav.Item>
                        </Link>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        )
    }
}

export default Navigation;