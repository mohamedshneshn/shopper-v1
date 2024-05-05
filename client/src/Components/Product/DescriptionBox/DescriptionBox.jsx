import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./DescriptionBox.css"; // Import your custom CSS file

const DescriptionBox = ({ description, reviews }) => {
  // State to track the active tab (either 'description' or 'reviews')
  const [activeTab, setActiveTab] = useState("reviews");

  // Event handler for button clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className="description-box my-5">
      {/* First row: Buttons for description and reviews */}
      <Row className="mb-5 ">
        <div className="d-flex gap-3 review-description-btns justify-content-center align-items-center">
          <button
            onClick={() => handleTabClick("reviews")}
            className={`reviews-button ${
              activeTab === "reviews" ? "active-tab" : ""
            } extra-class`}
          >
            Reviews
          </button>

          <button
            onClick={() => handleTabClick("description")}
            className={`reviews-button ${
              activeTab === "description" ? "active-tab" : ""
            } extra-class`}
          >
            Description
          </button>
          <hr
            style={{ width: "100%", backgroundColor: "#000", height: "3px" }}
          />
        </div>
      </Row>

      {/* Second row: Conditionally render content based on active tab */}
      <Row>
        {activeTab === "description" && (
          <Col>
            {/* Render description content */}
            <div className="description-content">{description}</div>
          </Col>
        )}
        {activeTab === "reviews" && (
          <Col>
            {/* Render reviews content */}
            <div className="reviews-content">
              {reviews.map((review, index) => (
                <div key={index} className="review">
                  <h5>{review.name}</h5>
                  <p>{review.rating}</p>
                  <p>{review.comment}</p>
                  <hr />
                </div>
              ))}
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default DescriptionBox;
