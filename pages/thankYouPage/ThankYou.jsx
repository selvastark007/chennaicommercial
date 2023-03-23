import React from 'react'

// sass
import './ThankYou.scss'

// router dom
import { useNavigate } from 'react-router-dom'

// Bootstarp
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


// social icons
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { BsEnvelope } from 'react-icons/bs'
import { ImPinterest2 } from 'react-icons/im'

const ThankYou = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="thank-wrapper py-3">
                <Container className='thank d-flex'>
                    <div className="imgDiv">
                        {/* <img src={thankGif} alt="thankGif" /> */}
                        <h2>Thank You...</h2>
                    </div>
                    <div className="contact py-2">
                        <strong className=''>Mobile Number :</strong>
                        <span> 091717 66660</span>
                    </div>
                    <div className="social-icons d-flex justify-content-between">
                        <button><FiFacebook /> </button>
                        <button><FiTwitter /> </button>
                        <button><ImPinterest2 /></button>
                        <button><BsEnvelope /></button>
                    </div>
                    <div className="back">
                        <Button variant="outline-warning" onClick={() => navigate(-1)}>Go back</Button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ThankYou