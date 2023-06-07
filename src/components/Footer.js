import React from "react";
import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <div className="main-footer text-white pt-4 pb-4">
      <div className="container">
        <div className="row">
          {/* Column-1 */}
          <div className="col-md-3 col-sm-6">
            <h4 className="fw-normal fs-5">About</h4>
            <hr className="my-4 hr-sm" />
            <p className="opacity-60 fw-light">
                 Explore. Connect. Engage.
            </p>
            <p className="opacity-60 fw-light">
            Search & offer for online classified advertisement
            </p>
          </div>

          {/* Column-2 */}
          <div className="col-md-3 col-sm-6">
            <h4 className="fw-normal fs-5">Our Services</h4>
            <hr className="my-4" />
            <ul className="list-unstyled opacity-60 fw-light">
              <li className="mb-1">
                <a className="text-decoration-none text-white" href="/">
                  Our Team
                </a>
              </li>
              <li className="mb-1">
                <a className="text-decoration-none text-white" href="/">
                  Contact Us
                </a>
              </li>
              <li className="mb-1">
                <a className="text-decoration-none text-white" href="/">
                  About
                </a>
              </li>
              <li className="mb-1">
                <a className="text-decoration-none text-white" href="/">
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a className="text-decoration-none text-white" href="/">
                  Blog
                </a>
              </li>
              <li className="mb-1">
                <a className="text-decoration-none text-white" href="/">
                  Team and Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column-3 */}
          <div className="col-md-3 col-sm-6" role="button">
            <h4 className="fw-normal fs-5">Contact</h4>
            <hr className="my-4" />
            <ul className="list-unstyled">
              <li className="mb-1">
                <i className="fa fa-home me-3 text-danger"></i>
                <span className="opacity-60 fw-light">New York, 12345, US</span>
              </li>

              <li className="mb-1">
                <i className="fa fa-envelope me-3 text-danger"></i>
                <span className="opacity-60 fw-light">
                  {" "}
                  info12323@example.com
                </span>
              </li>

              <li className="mb-1">
                <i className="fa fa-phone me-3 text-danger"></i>
                <span className="opacity-60 fw-light">+045 123 456 789</span>
              </li>

              <li className="mb-1">
                <i className="fa fa-print me-3 text-danger"></i>
                <span className="opacity-60 fw-light">+037 123 456 789</span>
              </li>
            </ul>

            <ul className="list-unstyled list-inline d-flex mt-4">
              <li className="mx-2">
                <i className="fa-brands fa-facebook bg-primary text-white p-2 rounded-circle"></i>
              </li>
              <li className="mx-2">
                <i className="fa-brands fa-square-twitter bg-info p-2 rounded-circle"></i>
              </li>
              <li className="mx-2">
                <i className="fa-brands fa-google-plus bg-danger p-2 rounded-circle"></i>
              </li>
              <li className="mx-2">
                <i className="fa-brands fa-linkedin bg-primary text-white p-2 rounded-circle"></i>
              </li>
            </ul>
          </div>

          {/* Column-4 */}
          <div className="col-md-3 col-sm-6">
            <h4 className="fw-normal fs-5">Subscribe</h4>
            <hr className="my-4" />
            <div className="input-group w-70">
              <input
                type="text"
                className="form-control br-ts-3  br-bs-3"
                placeholder="Email"
              />
              <div>
                <Button
                  type="button"
                  className="btn btn-primary br-ts-0 br-bs-0 h-10px"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            <h4 className="mb-0 mt-5 fw-normal fs-5">Payment</h4>
            <hr className="my-4" />
            <div className="payment-icon opacity-60 fw-light">
              <ul
                className="list-unstyled list-inline d-flex mt-3"
                role="button"
              >
                <li className="mx-2">
                  <i className="fa-brands fa-cc-amex"></i>
                </li>
                <li className="mx-2">
                  <i className="fa-regular fa-credit-card"></i>
                </li>
                <li className="mx-2">
                  <i className="fa-brands fa-cc-visa"></i>
                </li>
                <li className="mx-2">
                  <i className="fa-brands fa-cc-mastercard"></i>
                </li>
                <li className="mx-2">
                  <i className="fa-brands fa-cc-paypal"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-4 hr-sm" />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            Copyright &copy; {new Date().getFullYear()}. Designed by Group All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
