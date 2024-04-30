import React from "react";
import "./Hero.css";
import hand_icon from "../../../Assets/hand_icon.png";

import hero_image from "../../../Assets/hero_image.png";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-container mb-5">
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col
            lg={6}
            md={12}
            sm={12}
            className="hero-text d-flex flex-column justify-content-center mt-5"
          >
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hero-latest">
              <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
              </div>
              <p>collections</p>
              <p>for everyone</p>
            </div>
            <Button
              className="d-flex align-items-center gap-2 px-4 py-2 mt-3"
              variant="danger"
              style={{ width: "fit-content" }}
            >
              <span>Latest Collection</span>
              <i className="bi bi-arrow-right fs-5 fw-bold"></i>
            </Button>
          </Col>

          <Col lg={6} md={12} sm={12} className="mt-5">
            <img src={hero_image} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
