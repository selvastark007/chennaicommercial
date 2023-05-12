import React from "react";

// sass
import "./FooterForm.scss";

// react router dom
import { Link } from "react-router-dom";

// Bootstarp
import Container from "react-bootstrap/Container";

const FooterForm = () => {
  return (
    <>
      <div className="footer-form-wrapper">
        <Container className="w-75">
          <div className="d-flex footer-form">
            <div>
              <p>More Details For Properties </p>
            </div>
            <div>
              <Link to="/contact">
                <button>CLICK TO ENQUIRY THE PROPERTIES</button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterForm;
