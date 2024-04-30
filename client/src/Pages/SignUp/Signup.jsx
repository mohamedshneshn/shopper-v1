import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./SignUp.css"; // Import your CSS file

const SignUp = () => {
  // State variables for form inputs and checkbox
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here (e.g., API call)
    console.log("Form submitted:", {
      name,
      email,
      password,
      confirmPassword,
      agreeToTerms,
    });
  };

  return (
    <Container className="mt-5 mb-5   p-5 rounded signup-container">
      {/* Form */}
      <Row>
        <Col md={6} lg={4} className="mx-auto">
          <h2 className=" mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            {/* Your name input */}
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            {/* Email address input */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            {/* Password input */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Confirm password input */}
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Checkbox for terms and policy */}
            <Form.Group controlId="formCheckbox" className="mb-3">
              <Form.Check
                type="checkbox"
                label="By continuing, I agree to terms of use & policy."
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                required
              />
            </Form.Group>

            {/* Submit button */}
            <Button type="submit" variant="danger">
              Sign Up
            </Button>
          </Form>

          {/* Paragraph prompting user to log in */}
          <p className="mt-3">
            Already have an account?{" "}
            <a href="/login" style={{ color: "red" }}>
              Login here
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
