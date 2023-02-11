import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";

// SASS
import './Header.scss';

// Data
import {headerDatas} from '../data/DataHome';

// images
import Logo from '../../assets/images/cc-logo.png'

// icons
import {MdOutlineArrowDropDown} from 'react-icons/md'


const Header = () => {
    // sticky navbar
    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
          return setHeader("header")
        } else if (window.scrollY > 70) {
          return setHeader("header2 ")
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);
    return (
        <>
            <div className={header}>
                <div className="header__navbar">

                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">
                               <Link to='/'> <img src={Logo} alt="logo" /></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto">
                                    <NavLink as={Link} to="/">Home</NavLink>
                                    <NavLink as={Link} to="/it-parks-chennai">IT Parks in Chennai</NavLink>
                                    <NavLink as={Link} to="/properties-for-sale" className='hover-dropdown-head2'>Properties For Sale</NavLink>
                                    <NavLink as={Link} to='/p' className='hover-dropdown-head' > Properties <MdOutlineArrowDropDown/>

                                        <ul className='hover-dropdown'>
                                        {
                                            headerDatas.map((headerData) => {
                                                return (
                                                    <div key={headerData.id} >
                                                        <NavLink  as={Link} to={headerData.path} className='hover-dropdown-link'>{headerData.navDropDownLInk}</NavLink>
                                                    </div>
                                                )
                                            })
                                        }
                                        </ul>
                                    </NavLink>

                                    {/* mobile nav drop-down */}

                                    <NavDropdown title="Properties" id="basic-nav-dropdown">
                                        {
                                            headerDatas.map((headerData) => {
                                                return (
                                                    <NavDropdown.Item key={headerData.id} as={Link}
                                                     to={headerData.path}>{headerData.navDropDownLInk}</NavDropdown.Item>
                                                )
                                            })
                                        }

                                    </NavDropdown>

                                    <NavLink as={Link} to="/contact">Contact Us</NavLink>
                                </Nav>
                                <NavLink as={Link} to="/enquiery" className='enquiery'>Get a Free Quote</NavLink>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </div>
            </div>
        </>
    )
}

export default Header