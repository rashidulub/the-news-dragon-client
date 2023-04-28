import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const {user}= useContext(AuthContext)
    return (
        <Container>
            <div className="text-center mt-5">
                <img src={logo} alt="" />
                <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex mb-3'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={120} className='text-danger text- '>
                    I can be a React component, multiple React components, or just some text..
                    I can be a React component, multiple React components, or just some text..
                    I can be a React component, multiple React components, or just some text..
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                          
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                           { user && <Nav.Link href="#deets"><FaUserCircle
                            style={{fontSize:'2rem'}}
                            ></FaUserCircle>
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                            { user ?
                                <Button variant="secondary">LogOut</Button>:
                                <Link to='/login'>
                                <Button variant="secondary">Login</Button>
                                </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

    );
};

export default Header;