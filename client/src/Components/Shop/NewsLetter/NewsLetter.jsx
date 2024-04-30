import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./NewsLetter.css"; // Import your CSS file

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here (e.g., API call)
    console.log("Subscribed with email:", email);
    // Reset the email input after subscribing
    setEmail("");
  };

  return (
    <div className="newsletter-container">
      <Container>
        <Row className="justify-content-center my-5">
          <Col lg={8} md={10} sm={12}>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p className=" ">
              Subscribe to our newsletter to get the latest updates on new
              collections, offers, and more!
            </p>
            <Form
              onSubmit={handleSubscribe}
              className="d-flex flex-column flex-md-row justify-content-center gap-2 mt-5"
            >
              {/* Input field for email */}
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-fill me-2 input-field"
              />

              {/* Subscribe button */}
              <Button type="submit" variant="danger" className="flex-shrink-0">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLetter;

/* how can i create newsletter component  to be displayed on the home page of the website?where we ask the user to enter their email address and click on the subscribe button using bootstrap and react-bootstrap
 */
