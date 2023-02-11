import React from 'react';
import { Link } from 'react-router-dom'

// icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaFacebookMessenger } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFillEnvelopeFill } from 'react-icons/bs'

// Bootstarp
import Container from 'react-bootstrap/Container';

// sass
import './Footer.scss'

// data
import { headerDatas } from '../data/DataHome'

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <Container>
                    <div className="footer__content d-flex py-5">
                        <div className="contact">
                            <h4>Contact Us</h4>
                            <p>Chennai commercials is an exclusive real estate concern for commercial property dealings in Chennai.</p>
                            <div className='d-flex location'>
                                <MdLocationOn />
                                <p>64 , Hari building , 1st floor , South Usman Road , Opp To Aruna Hotel , T Nagar , Chennai , Tamil Nadu 600017 </p>
                            </div>
                            <div className='d-flex phoneNumber'>
                                <BsFillTelephoneFill /> <p>091717 66660 , 044 491 2646</p></div>
                            <div className='d-flex envelope'> <BsFillEnvelopeFill /> <a href="maito:chennaicommercials@gmail.com">chennaicommercials@gmail.com</a></div>

                        </div>
                        <div className="popular-location d-flex">
                            <h4>Popular Locations</h4>
                            {
                                headerDatas.map((headerData) => {
                                    return (

                                        <Link key={headerData.id} to={headerData.path}>{headerData.navDropDownLInk}</Link>
                                    )
                                })
                            }

                        </div>
                        <div className="quick-links d-flex">
                            <h4>Quick Links</h4>
                            <Link to='/'>About</Link>
                            <Link to='/'>Blog</Link>
                            <Link to='/'>Sell Your Office</Link>
                            <Link to='/'>Rent Office</Link>
                            <Link to='/'>Open Office</Link>
                            <Link to='/'>Contact Us</Link>
                        </div>
                        <div className="follow-us">
                            <h4>Follow Us</h4>
                            <div className="followUs-icons d-flex">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                                <FaFacebookMessenger />
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className='text-center'>©2023 All Rights Reserved. Design and Developed by <a href="#">WEBDADS2U </a>PVT LTD</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer