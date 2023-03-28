import React, { useEffect, useState } from "react";
import axios from "axios";

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

// spinner
import Spinner from "react-bootstrap/Spinner";
import Loader from "../../components/Loader/Loader";

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
  propertyName:
    "9800 sqft 100 seat furnished office at IT Park OMR Sholinganalur",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const phoneRegExp = /^[0-9]{10}$/;
const nameRegExp = /^[A-Za-z]+$/;

const validationSchema = Yup.object({
  propertyName: Yup.string(),
  name: Yup.string()
    .matches(nameRegExp, "Invalid characters in name")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Required !"),
  email: Yup.string().email("Invalid email format!").required("Required !"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required !"),
  message: Yup.string(),
});

const Innerpage = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [readMore, setReadMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const sliceItem = items.slice(0, 1);

  const [pageCount, setPageCount] = useState(0);

  const API_URL =
    "https://chennai-commercials-admin-mern.vercel.app/api/v2/properties/";

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`${API_URL} `, { cancelToken: cancelToken.token })
      .then((response) => {
        console.log("response ", response);
        const data = response.data?.data ? response.data?.data : null;
        setItems(data);
        // console.log(data.length);
        setLoading(true);
      })
      .catch((error) => {
        console.warn(error);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  // const fetchComments = async (currentPage) => {
  //   const res = await fetch(
  //     `https://chennai-commercials-admin-mern.vercel.app/api/v2/properties`
  //   );
  //   const data = await res.json();
  //   return data;
  // };

  const handlePageClick = (data) => {
    console.log(data.selected);

    // let currentPage = data.selected + 1;

    // const commentsFromServer = await fetchComments(currentPage);

    // setItems(commentsFromServer);
  };

  return (
    <>
      <div className="innerpage-wrapper">
        {loading ? (
          sliceItem.map((item, index) => {
            // return (
            //   <>
            //     <div key={item._id}>
            //       <p>Title {item?.title}</p>

            //       <p>Address {item?.locality?.district}</p>
            //       <p>Address {item?.locality?.district}</p>
            //     </div>
            //   </>
            // );
            return (
              <Container className="innerPage py-3" key={index}>
                <div className="innerPage__section1 d-flex">
                  <div className="section1__left">
                    <div className="title py-2">
                      <h6>{item?.title}</h6>
                    </div>
                    <div className="carousel">
                      <Carousel>
                        <div>
                          <img src={innerImg1} alt="inner-img" />
                        </div>
                        <div>
                          <img src={innerImg2} alt="inner-img" />
                        </div>
                        <div>
                          <img src={innerImg3} alt="inner-img" />
                        </div>
                        <div>
                          <img src={innerImg3} alt="inner-img" />
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
                          Email
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="section1__right">
                    <div className="title py-2">
                      <h4>Request More Information</h4>
                      <p>
                        Your email address will not be published. Required
                        fields are marked <span>*</span>{" "}
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
                            <Field type="text" name="propertyName" />
                          </div>

                          <div className="form-control">
                            <label htmlFor="name">
                              Name <span>*</span>
                            </label>
                            <Field type="text" name="name" id="name" />
                            <ErrorMessage name="name">
                              {(msg) => (
                                <div className="error-message">{msg}</div>
                              )}
                            </ErrorMessage>
                          </div>

                          <div className="form-control">
                            <label htmlFor="email">
                              Email <span>*</span>{" "}
                            </label>
                            <Field type="email" name="email" id="email" />
                            <ErrorMessage name="email">
                              {(msg) => (
                                <div className="error-message">{msg}</div>
                              )}
                            </ErrorMessage>
                          </div>

                          <div className="form-control">
                            <label htmlFor="phone">
                              Phone <span>*</span>{" "}
                            </label>
                            <Field name="phone" id="phone" />
                            <ErrorMessage name="phone">
                              {(msg) => (
                                <div className="error-message">{msg}</div>
                              )}
                            </ErrorMessage>
                          </div>

                          <div className="form-control">
                            <label htmlFor="message">
                              Message <span>*</span>{" "}
                            </label>
                            <Field id="message" name="message" as="textarea">
                              <ErrorMessage name="message">
                                {(msg) => (
                                  <div className="error-message">{msg}</div>
                                )}
                              </ErrorMessage>
                            </Field>
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
                      {/* 9800 sqft plug and play office space available for rent in
                      Tek Meadows IT Park, OMR, Karapakkam with modern
                      amenities. */}
                      {item?.title}
                    </h5>
                    <p>
                      Fully furnished premium office space with A grade
                      amenities suits well for IT / MNC / Corporate companies.
                    </p>
                  </div>
                  <div className="details d-grid">
                    <div className="details__title">
                      <strong>Interior facility :</strong>
                      <ul></ul>
                    </div>
                    <div className="details__title">
                      <strong>Common facility :</strong>
                      <ul></ul>
                    </div>
                    <div className="details__title">
                      <strong>Commercial :</strong>
                      <ul></ul>
                    </div>
                    <div className="details__title">
                      <strong>
                        Please feel free to contact for more details and site
                        visit.
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
              </Container>
            );
          })
        ) : (
          <Loader />
        )}
        {/* <div className="pagination d-flex justify-content-center">
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            pageCount={4}
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
        </div> */}
      </div>
    </>
  );
};

export default Innerpage;
