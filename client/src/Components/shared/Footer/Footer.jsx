import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css"; // Import your CSS file
import footer_logo from "../../../Assets/logo_big.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white">
      <Container className="py-4">
        {/* First row with icon and word "SHOPPER" */}
        <Row className="py-1">
          <Col lg={12} md={12} sm={12} className="text-center">
            <div className="d-flex align-items-center justify-content-center gap-2">
              {/* Replace with your logo/icon */}
              <img src={footer_logo} alt="Shopper Logo" />
              <span className="fw-bold fs-2 text-white">SHOPPER</span>
            </div>
          </Col>
        </Row>

        {/* Second row with list of links */}
        <Row className="py-1">
          <Col lg={12} md={12} sm={12} className="text-center">
            <ul className="footer-links list-inline">
              <li className="list-inline-item">
                <a href="/company">Company</a>
              </li>
              <li className="list-inline-item">
                <a href="/product">Product</a>
              </li>
              <li className="list-inline-item">
                <a href="/offices">Offices</a>
              </li>
              <li className="list-inline-item">
                <a href="/about">About</a>
              </li>
              <li className="list-inline-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Third row with social media icons */}
        <Row className="py-1">
          <Col lg={12} md={12} sm={12} className="text-center">
            <ul className=" d-flex justify-content-center gap-3">
              <li className="list-inline-item ">
                <a href="facebook_link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="whatsapp_link" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="instagram_link" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="linkedin_link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Fourth row with copyright paragraph */}
        <Row className="py-1">
          <Col lg={12} md={12} sm={12} className="text-center">
            <p>Copyright © {currentYear} - All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
