import React from "react";

// sass
import "./Contact.scss";

// bootstarp
import Container from "react-bootstrap/Container";

// Formick form
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// icon
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Submit = (values) => {
  console.log("form data", values);
  console.log('submit');
};

const phoneRegExp = /^[0-9]{10}$/;
const nameRegExp = /^[A-Za-z]+$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(nameRegExp, "Invalid characters in name")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Required !"),
  email: Yup.string().email("Invalid email format!").required("Required !"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required !"),
  message: Yup.string().required("Required !"),
});

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__map d-flex">
          <div className="contact__left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.054985135234!2d80.22857841384426!3d13.032170517074718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267170fed812b%3A0xe82e476277bf11b4!2sHotel%20Aruna%20T.nagar%20chennai!5e0!3m2!1sen!2sin!4v1676439211588!5m2!1sen!2sin"></iframe>
          </div>
          <div className="contact__right">
            <div className="title">
              <h2>Contact</h2>
              <h2>Get in touch</h2>
              <p>LEAVE US A MESSAGE</p>
            </div>
            <div className="form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={Submit}
              >
                <Form>
                  <div className="formName-formPhone d-flex">
                    <div className="form-control">
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>
                      <Field type="text" name="name" id="name" />
                      <ErrorMessage name="name">
                        {(msg) => <div className="error-message">{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div className="form-control">
                      <label htmlFor="phone">
                        Phone <span>*</span>{" "}
                      </label>
                      <Field type="tel" name="phone" id="phone" />
                      <ErrorMessage name="phone">
                        {(msg) => <div className="error-message">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="form-control">
                    <label htmlFor="email">
                      Email <span>*</span>{" "}
                    </label>
                    <Field type="email" name="email" id="email" />
                    <ErrorMessage name="email">
                      {(msg) => <div className="error-message">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-control">
                    <label htmlFor="message">Message</label>
                    <Field as='textarea' id="message" name='message'></Field>
                    <ErrorMessage name="phone">
                      {(msg) => <div className="error-message">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="from-control">
                    <button type="submit" onSubmit={Submit}>submit</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="contact-bottom-wrapper">
          <Container>
            <div className="contact-bottom">
              <div className="title">
                <h2>Quick</h2>
                <h2>Support</h2>
                <p>YOU CAN GET ALL THE CONTACT INFORMATION</p>
              </div>
              <div className="details d-flex">
                <div className="details__content">
                  <p>
                    <MdLocationOn />
                  </p>
                  <h5>Visit Us</h5>
                  <small>
                    64, Hari building, 1st floor, South Usman Road, T Nagar
                  </small>{" "}
                  <br />
                  <small>Chennai,Tamil Nadu 600017</small>
                </div>
                <div className="details__content">
                  <p>
                    <BsFillTelephoneFill />
                  </p>
                  <h5>Call us </h5>
                  <small>091717 66660</small> <br />
                  <small>044 491 2646</small>
                </div>
                <div className="details__content">
                  <p>
                    <BsFillEnvelopeFill />
                  </p>
                  <h5>Email Us</h5>
                  <small>chennaicommercials@gmail.com</small>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Contact;
