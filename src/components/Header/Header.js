import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image-source/Icon/Logo.png'
import './Header.css'
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container header">
            <Navbar expand="lg">
                <Link to="/home">
                <Navbar.Brand href="#home">
                <div className="logo"><img src={logo}  alt="Travel-guru"/></div>
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Link to="/blog">
                    <Nav.Link href="#link" className="spacing-left"><h1>
                    Blog</h1></Nav.Link>
                    </Link>
                   <Link to="/contact">
                   <Nav.Link href="#news" className="spacing-left"><h1> Contact</h1></Nav.Link>
                   </Link>
                    <Link to="/logIn">
                    {
                        !loggedInUser.isSignedIn
                        ?<Button variant="outline-success">Log In</Button>
                        : <Button variant="outline-success" style={{display : "none"}}>Log In</Button>
                    }
                    </Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        </div>
    );
};

export default Header;