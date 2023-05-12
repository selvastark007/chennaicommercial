import React from 'react'

// sass
import './FooterBannerAndClientLogo.scss'

// image
import FooterBanner from '../../assets/images/footer-banner.jpg'

// client logo image
import client1 from '../../assets/images/client logo/client-1.png'
import client2 from '../../assets/images/client logo/client-2.png'
import client3 from '../../assets/images/client logo/client-3.png'
import client4 from '../../assets/images/client logo/client-4.png'
import client5 from '../../assets/images/client logo/client-5.png'
import client6 from '../../assets/images/client logo/client-6.png'
import client7 from '../../assets/images/client logo/client-7.png'
import client8 from '../../assets/images/client logo/client-8.png'
import client9 from '../../assets/images/client logo/client-9.png'
import client10 from '../../assets/images/client logo/client-10.png'
import client11 from '../../assets/images/client logo/client-11.png'
import client12 from '../../assets/images/client logo/client-12.png'
import client13 from '../../assets/images/client logo/client-13.png'
import client14 from '../../assets/images/client logo/client-14.png'
import client15 from '../../assets/images/client logo/client-15.png'
import client16 from '../../assets/images/client logo/client-16.png'
import client17 from '../../assets/images/client logo/client-17.png'
import client18 from '../../assets/images/client logo/client-18.png'
import client19 from '../../assets/images/client logo/client-19.png'
import client20 from '../../assets/images/client logo/client-20.png'
import client21 from '../../assets/images/client logo/client-21.png'
import client22 from '../../assets/images/client logo/client-22.png'


// Bootstarp
import Container from 'react-bootstrap/Container';

// react slick corousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  speed: 1000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],

};

const FooterBannerAndClientLogo = () => {
  return (
   <>
    <div className="footerBannerAndClientLogo">
      <div className="footerBanner">
        <img src={FooterBanner} alt="footer-banner"/>
      </div>
      <Container>
        <div className="client-logo">
          <div className="title">
            <h2 className='text-center py-3'>Our Clients</h2>
          </div>
        <Slider {...settings}>
        <div className="client">
          <img src={client1} alt="client-1" />
        </div>
        <div className="client">
          <img src={client2} alt="client-2" />
        </div>
        <div className="client">
          <img src={client3} alt="client-3" />
        </div>
        <div className="client">
          <img src={client4} alt="client-4" />
        </div>
        <div className="client">
          <img src={client5} alt="client-5" />
        </div>
        <div className="client">
          <img src={client6} alt="client-6" />
        </div>
        <div className="client">
          <img src={client7} alt="client-7" />
        </div>
        <div className="client">
          <img src={client8} alt="client-8" />
        </div>
        <div className="client">
          <img src={client9} alt='client-9' />
        </div>
        <div className="client">
          <img src={client10} alt="client-10" />
        </div>
        <div className="client">
          <img src={client11} alt="client-11" />
        </div>
        <div className="client">
          <img src={client11} alt="client-12" />
        </div>
        <div className="client">
          <img src={client12} alt="client-12" />
        </div>
        <div className="client">
          <img src={client13} alt="client-13" />
        </div>
        <div className="client">
          <img src={client14} alt="client-14" />
        </div>
        <div className="client">
          <img src={client15} alt="client-15" />
        </div>
        <div className="client">
          <img src={client16} alt="client-16" />
        </div>
        <div className="client">
          <img src={client17} alt="client-17" />
        </div>
        <div className="client">
          <img src={client18} alt="client-18" />
        </div>
        <div className="client">
          <img src={client19} alt="client-19" />
        </div>
        <div className="client">
          <img src={client20} alt="client-20" />
        </div>
        <div className="client">
          <img src={client21} alt="client-21" />
        </div>
        <div className="client">
          <img src={client22} alt="client-22" />
        </div>
    </Slider>
        </div>
      </Container>
    </div>
   </>
  )
}

export default FooterBannerAndClientLogo