import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-light py-5">
      <div className="container">
        <div className="row text-center text-md-start gy-4 align-items-start">

          {/* Brand Section */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <img
              src="../Image/HerbsLogo.PNG"
              alt="Chauhan Herbs Logo"
              className="img-fluid mb-3 rounded-circle footer-logo"
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />
            <h3 className="fw-bold text-center text-md-start mb-5 footer-brand">
              <span className="text-green">Chauhan</span><br />
              <span className="text-blue">Herbs</span>
            </h3>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold text-warning mb-3 text-center text-md-start">Quick Links</h5>
            <ul className="list-unstyled listItems fw-semibold small mb-0 text-center text-md-start quick-links">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  <i className="bi bi-house-door-fill me-2"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-light text-decoration-none">
                  <i className="bi bi-shop-window me-2"></i>Store
                </Link>
              </li>
              <li>
                <Link to="/natural-groceries" className="text-light text-decoration-none">
                  <i className="bi bi-leaf-fill me-2"></i>Natural Groceries
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  <i className="bi bi-info-circle-fill me-2"></i>About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  <i className="bi bi-envelope-fill me-2"></i>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-12 col-md-3 contact-section">
            <h5 className="fw-bold text-warning mb-3 text-center text-md-start">Contact Us</h5>
            <p className="small mb-0 text-center text-md-start">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Shop No. 18, SS Plaza,<br />
              Maharaja Surajmal Marg,<br />
              Chipiyana Buzurg
            </p>
            <p className="small mt-2 mb-0 text-center text-md-start">
              <i className="bi bi-telephone-fill me-2"></i>+91 9045556369
            </p>
            <p className="small mt-1 text-center text-md-start">
              <i className="bi bi-envelope-fill me-2"></i>chauhanherbs1201@gmail.com
            </p>
          </div>

          {/* Follow Us */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold text-warning mb-3 text-center text-md-start">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2 social-icons">
              <a href="https://www.facebook.com/login" className="text-light fs-4"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-light fs-4"><i className="bi bi-instagram"></i></a>
              <a href="https://x.com/" className="text-light fs-4"><i className="bi bi-twitter"></i></a>
              <a href="https://www.youtube.com/" className="text-light fs-4"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="footer-divider">
          <hr className="footer-line" />
        </div>

        {/* Bottom Text */}
        <div className="text-center small text-secondary ">
          © 2025 <span className="text-warning">Chauhan Herbs</span> | All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;