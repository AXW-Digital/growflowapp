import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'


class Header extends React.Component {
    render() {
        return (
            <Navbar id="header" fixed="top" collapseOnSelect expand="lg"  variant="light">
            <Navbar.Brand className="logo" style={{color: '#363a59'}} href="/">Growflow Insights</Navbar.Brand>
            <Navbar.Toggle className="text-danger" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="mylinks" href="#kukka">Visio</Nav.Link>
                <Nav.Link className="mylinks" href="#kasvut">Kasvuvaikkutaja</Nav.Link>
                <Nav.Link className="mylinks" href="#growflow">Growflow</Nav.Link>
                <Nav.Link className="mylinks" href="#voima">Voima</Nav.Link>
            </Nav>
            <Nav className='ml-auto'>
                <Nav.Link href="/signin" className="bx bxs-user bx-md signlinks"></Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Header;