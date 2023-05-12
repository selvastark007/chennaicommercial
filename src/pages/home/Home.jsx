import React,{useEffect,useState} from 'react'
import Axios from "axios";

// tooltip
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

// Bootstarp
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// Router Dom
import { Link } from 'react-router-dom'

// Data
import { services, saleProperties, settings2 } from '../../components/data/DataHome'

// slik corousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// sass
import './Home.scss'

// icons
import { MdLocationOn } from 'react-icons/md'
import FooterBannerAndClientLogo from '../../components/footerBannerAndClient/FooterBannerAndClientLogo';
import FooterForm from '../../components/footerForm/FooterForm';


const Home = () => {

  // const [propertyType, setPropertyType] = React.useState('');
  // const handleChange = (event) => {
  //   setPropertyType(event.target.value);
  // }

  // const [type, setType] = React.useState('');
  // const handleChange2 = (event) => {
  //   setType(event.target.value);
  // }

  // const [location, setLocation] = React.useState('');
  // const handleChange3 = (event) => {
  //   setLocation(event.target.value);
  // }

 // json place-holder api
 const [posts, setPosts] = useState([]);
 const [photos , setPhotos] = useState([])
 const slicePhotos = photos.slice(4,10);
 useEffect(() => {
   Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
     setPosts(res.data)
   );
 }, []);

 useEffect(() => {
  Axios.get("https://jsonplaceholder.typicode.com/photos").then((res) =>
  setPhotos(res.data)
  );
}, []);



  return (
    <>
      <div className="home">
        {/* Banner section start */}
        <div className="banner">
          <Container className='text-center'>
            <h5>Point of Contact for All</h5>
            <h1>Premium Building in Chennai</h1>
            <form className="form">

         
              <Form.Select aria-label="Default select example">
                <option>Property type</option>
                {
                  posts.map((post)=> {
                    return(
                      <option key={post.id} value={post.name}>{post.name}</option>
                    )
                  })
                }
              </Form.Select>

              <Form.Select aria-label="Default select example">
                <option>Type</option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
              </Form.Select>

              <Form.Select aria-label="Default select example">
                <option>Loaction</option>
                {
                  posts.map((post)=> {
                    return(
                      <option key={post.id} value={post.name}>{post.name}</option>
                    )
                  })
                }
              </Form.Select>

            
              <button  type='submit' className='submit'> Submit</button>

            </form>
          </Container>
        </div>
        {/* Banner section end */}

        {/* Section 2 start */}
        <div className="section2-wrapper">
          <Container className='d-flex section2'>
            <div className="section2-content">
              <p>The best network of</p>
              <p>Commercial <br /> Property in Chennai</p>
            </div>
            <div className="section2-content">
              <p>121+ options to <br /> choose from <br /> in Chennai</p>
            </div>
            <div className="section2-content">
              <p>1Lakh+ <br /> Customers <br /> Connected <br /> Monthly</p>
            </div>
            <div className="section2-content">
              <p>Free LIst for <br /> All Properties</p>
            </div>
          </Container>
        </div>
        {/* Section 2 start */}

        {/* Service section start */}
        <div className="service-wrapper">
          <Container>
            <div className="service-head text-center">
              <h2>Service We Offer </h2> <p>
                based on the localities you have explored in Chennai South </p>
            </div>
            <div className="service-img d-grid">
              {
                services.map((service) => {
                  return (
                    <div className="service-img-box text-center" key={service.id}>
                      <div className="service-img">
                      <img src={service.imgSrc} alt={service.alt} />
                      </div>
                      <div className="service-content">
                      <p>{service.serviceType}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Container>
        </div>
        {/* Service section End */}

        {/* sale property section start */}
        <div className="saleProperty-wrapper">
          <Container>
            {/* <h2 className='py-3'> Properties for Sale</h2> */}
            <Slider {...settings2}>
              {
                saleProperties.map((salePropertie) => {
                  return (
                    <div className="sale-card" key={salePropertie.id}>
                      <div className="sale-card-top">
                        <img src={salePropertie.saleImg} alt={salePropertie.title} />
                        <button className='sale-button'>Sales</button>
                        <button className='rent-button'>Rent</button>
                        <button className='featured-button'>Featured</button>
                        <p className="property-type">{salePropertie.propertyType}</p>
                      </div>
                      <div className="sale-card-bottom">
                        <p className='title'>{salePropertie.title}</p>
                        <div className="location d-flex">
                          <MdLocationOn />
                          <small>{salePropertie.location}</small>
                        </div>
                        <div className="price d-flex">
                          <div>
                            <p>Rate / Sqft</p>
                            <small>{salePropertie.sqft}</small>
                          </div>
                          <div>
                            <p>Price</p>
                            <small>{salePropertie.price}</small>
                          </div>
                        </div>
                        <div className="details d-flex">
                          <div className='details__left'>
                            <Link to='/'>Enquiry</Link>
                          </div>
                          <div className='details__right'>
                            <Link to='/'>Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </Container>
        </div>

        {/* sale property section end */}

      </div >
           {/* footer banner and client logo start */}
           <FooterBannerAndClientLogo />
            {/* footer banner and client logo  end*/}
            {/* footer form start */}
            <FooterForm />
            {/* footer form end */}
    </>
  )
}

export default Home