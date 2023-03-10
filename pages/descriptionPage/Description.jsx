import React, { useEffect, useState } from "react";
import Axios from "axios";

// sass
import "./Description.scss";

// Bootstarp
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";

// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// pagination
import ReactPaginate from "react-paginate";

// data
import {
  InteriorFacility,
  commanFacility,
  commercial,
} from "../../components/data/DataHome";

import { FaUsersCog } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
// social icons
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { ImPinterest2 } from "react-icons/im";

// images
import innerImg1 from "../../assets/images/inner-image/inner-1.jpg";
import innerImg2 from "../../assets/images/inner-image/inner-2.jpg";
import innerImg3 from "../../assets/images/inner-image/inner-3.jpg";
import innerImg4 from "../../assets/images/inner-image/inner-4.jpg";

// formick
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Await, useParams } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  propertyName: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  email: Yup.string().email("Invalid email format!").required("Required !"),
  phone: Yup.string().required("Required !"),
  message: Yup.string().required("Required !"),
});

const Innerpage = () => {
  const limit = 10;

  const [name, setName] = useState('')
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit= ${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));
      // console.log(total);
      setItems(data);
    };
    getComments();
  }, []);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit= ${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    // console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFromServer = await fetchComments(currentPage);

    setItems(commentsFromServer);
  };

  return (
    <>
      <div className="innerpage-wrapper">
        <Container className="innerPage py-3">
          <div className="innerPage__section1 d-flex">
            <div className="section1__left">
              <div className="title py-2">
                <h6>
                  9800 sqft 100 seat furnished office at IT Park OMR
                  Sholinganalur
                </h6>
              </div>
              <div className="carousel">
                <Carousel>
                  <div>
                    <img src={innerImg1} alt="inner img" />
                  </div>
                  <div>
                    <img src={innerImg2} alt="inner img" />
                  </div>
                  <div>
                    <img src={innerImg3} alt="inner img" />
                  </div>
                  <div>
                    <img src={innerImg4} alt="inner img" />
                  </div>
                </Carousel>
                <div className="social-icons d-flex justify-content-between">
                  <button>
                    <FiFacebook /> Facebook
                  </button>
                  <button>
                    <FiTwitter /> Twitter
                  </button>
                  <button>
                    <ImPinterest2 /> Pinterst
                  </button>
                  <button>
                    <BsEnvelope />
                    Email to a Friend
                  </button>
                </div>
              </div>
            </div>
            <div className="section1__right">
              <div className="title py-2">
                <h4>Request More Information</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked <span>*</span>{" "}
                </p>
              </div>
              <div className="innerPage__form">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <div className="form-control py-2">
                      <label htmlFor="property">Info</label>
                      <Field
                        type="text"
                        name="propertyName"
                        value="9800 sqft 100 seat furnished office at IT Park OMR Sholinganalur"
                      />
                    </div>

                    <div className="form-control">
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>
                      <Field type="text" name="name" id="name" />
                      <ErrorMessage name="name" />
                    </div>

                    <div className="form-control">
                      <label htmlFor="email">
                        Email <span>*</span>{" "}
                      </label>
                      <Field type="email" name="email" id="email" />
                      <ErrorMessage name="email" />
                    </div>

                    <div className="form-control">
                      <label htmlFor="phone">
                        Phone <span>*</span>{" "}
                      </label>
                      <Field type="tel" name="phone" id="phone" />
                      <ErrorMessage name="phone" />
                    </div>

                    <div className="form-control">
                      <label htmlFor="message">
                        Message <span>*</span>{" "}
                      </label>
                      <textarea id="message"></textarea>
                      <ErrorMessage name="phone" />
                    </div>

                    <div className="from-control">
                      <button type="submit" onSubmit={onSubmit}>
                        submit
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
          <div className="innerPage__section2">
            <div className="title">
              <h5>
                9800 sqft plug and play office space available for rent in Tek
                Meadows IT Park, OMR, Karapakkam with modern amenities.
              </h5>
              <p>
                Fully furnished premium office space with A grade amenities
                suits well for IT / MNC / Corporate companies.
              </p>
            </div>
            <div className="details d-grid">
              <div className="details__title">
                <strong>Interior facility :</strong>
                <input 
                type="text" 
                name="" 
                id="" 
                // value={name} 
                onChange={(e)=> setName(e.target.value)} 
                style={{display:'block'}}
                placeholder='search here...' />
                {/* <p>{name}</p> */}
                <ul>
                  {items
                    .filter((item) => {
                      if(name == ''){
                        return item;
                      }
                      else if (item.body.toLowerCase().includes(name.toLocaleLowerCase())){
                        return item;
                      }
                    })

                  .map((item) => {
                    return (
                      <div className="" key={item.id}>
                        <li >
                          
                          {item.body.length < 25 ? item.body : item.body.slice(0, 20) + "..."}
                          
                          <strong>{item.id}</strong>
                        </li>
                        <p>{item.email}</p>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="details__title">
                <strong>Common facility :</strong>
                <ul>
                  {commanFacility.map(({ id, icon, title }) => {
                    return (
                      <li key={id}>
                        {icon} {title}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="details__title">
                <strong>Commercial :</strong>
                <ul>
                  {commercial.map(({ id, icon, title }) => {
                    return (
                      <li key={id}>
                        {icon} {title}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="details__title">
                <strong>
                  Please feel free to contact for more details and site visit.
                </strong>
                <ul>
                  <li>
                    <FaUsersCog /> Gopi Krishnan
                  </li>
                  <li>
                    <FaUserFriends /> Property Consultant
                  </li>
                  <li>
                    <ImOffice /> Chennai Commercials
                  </li>
                  <li>
                    <BsFillTelephoneFill /> 91717 66660
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* pagination start */}
          <div className="pagination d-flex justify-content-center">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
          {/* pagination end */}
        </Container>
      </div>
    </>
  );
};

export default Innerpage;
