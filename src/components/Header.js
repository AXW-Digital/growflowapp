import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'


class Header extends React.Component {
    render() {
        return (
            <Navbar id="header" fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand className="text-dark" href="/">Growflow Insights</Navbar.Brand>
            <Navbar.Toggle className="text-danger" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="text-dark" href="#kukkavoi">Visio</Nav.Link>
                <Nav.Link className="text-dark" href="#kasvuvaikkutaja">Kasvuvaikkutaja</Nav.Link>
                <Nav.Link className="text-dark" href="#growflow">Growflow</Nav.Link>
                <Nav.Link className="text-dark" href="#voima">Voima</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link className="text-dark" href="#deets">More deets</Nav.Link>
                <Nav.Link className="text-dark" eventKey={2} href="#memes"> Dank memes </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Header;