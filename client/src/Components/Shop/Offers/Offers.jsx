import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Offers.css";
import exclusive_image from "../../../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers-container">
      <Container className="mt-5 mb-5">
        <Row className="align-items-center">
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex flex-column justify-content-center gap-3 mt-5  "
          >
            <h2>Exclusive </h2>
            <h2>Offers For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS </p>
            <Button
              className="d-flex align-items-center gap-2 px-4 py-2 mt-3"
              variant="danger"
              style={{ width: "fit-content" }}
            >
              <span>Shop Now</span>
              <i className="bi bi-arrow-right fs-5 fw-bold"></i>
            </Button>
          </Col>
          <Col lg={6} md={12} sm={12} className="offers-image mt-5">
            <img
              src={exclusive_image}
              alt=""
              className="img-fluid w-100 mb-5 p-5"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offers;
