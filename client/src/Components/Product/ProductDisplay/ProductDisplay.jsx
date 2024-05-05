import React, { useState, useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import StarRating from "react-star-ratings";
import { Form, Input } from "antd";
import { Radio } from "antd";
import "./ProductDisplay.css";

const { Item: FormItem } = Form;

const { Group: RadioGroup, Button: RadioButton } = Radio;

const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { colors } = props.product;
  const { sizes } = props.product;
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    addToCart(props.product.id);
  };

  const handleBuyNow = () => {
    console.log("Buying now:", props.product.name);
  };

  const handleColorChange = (color) => {
    // Handle color change here
    console.log(`Color selected: ${color}`);
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle increasing the quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Container className="mt-5 mb-5">
      <Row>
        {/* Left side: Images */}
        <Col lg={6} md={12} sm={12}>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <img
                src={props.product.image}
                alt={props.product.name}
                className="product-image img-fluid mb-3 w-100"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <img
                src={props.product.image}
                alt={props.product.name}
                className="product-image img-fluid mb-3 w-100"
              />
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <img
                src={props.product.image}
                alt={props.product.name}
                className="product-image img-fluid mb-3 w-100"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <img
                src={props.product.image}
                alt={props.product.name}
                className="product-image img-fluid mb-3 w-100"
              />
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <img
                src={props.product.image}
                alt={props.product.name}
                className="product-image img-fluid mb-3 w-100"
              />
            </Col>
          </Row>
        </Col>

        {/* Right side: Product details */}
        <Col lg={6} md={12} sm={12} className="mb-3">
          <div className="fixed-right">
            {/* Product name */}
            <h2 className="mb-5">{props.product.name}</h2>
            {/* Star rating */}
            <StarRating
              rating={4.5}
              starRatedColor="gold"
              starDimension="20px"
              starSpacing="2px"
            />
            (122 reviews)
            {/* Prices */}
            <p className="my-5 fs-5 fw-bold">
              ${props.product.new_price}
              <del className="ms-5">${props.product.old_price}</del>
            </p>
            {/* Description */}
            <p>{props.product.description}</p>
            {/* Form for product options */}
            <Form layout="vertical">
              {/* Color selection */}
              <FormItem
                label="Select Color"
                style={{ marginTop: "50px", marginBottom: "50px" }}
              >
                <div className="color-selection">
                  <RadioGroup
                    onChange={(e) => handleColorChange(e.target.value)}
                    defaultValue={colors[0]}
                  >
                    {colors.map((color, index) => (
                      <RadioButton
                        key={index}
                        value={color}
                        className="color-button"
                        style={{
                          display: "inline-block",
                          width: "30px", // Adjust width
                          height: "30px", // Adjust height
                          borderRadius: "50%",
                          backgroundColor: color,
                          padding: "5px",
                          marginRight: "10px", // Add spacing between buttons
                        }}
                      />
                    ))}
                  </RadioGroup>
                </div>
              </FormItem>

              {/* Size selection */}
              <FormItem
                label="Select Size"
                style={{ marginTop: "50px", marginBottom: "50px" }}
              >
                <RadioGroup
                  onChange={handleSizeChange}
                  value={selectedSize}
                  className="size-selection"
                >
                  {sizes.map((size, index) => (
                    <RadioButton
                      key={index}
                      value={size}
                      className="size-button"
                    >
                      {size}
                    </RadioButton>
                  ))}
                </RadioGroup>
              </FormItem>

              {/* Quantity selection */}
              <Form.Item
                label="Quantity"
                style={{ marginTop: "50px", marginBottom: "50px" }}
              >
                <div className="quantity-container">
                  <Button
                    onClick={handleDecrease}
                    className="quantity-button me-2"
                    type=""
                  >
                    -
                  </Button>
                  <Input
                    type="text"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="quantity-input"
                    style={{ width: "60px", textAlign: "center" }}
                  />
                  <Button
                    onClick={handleIncrease}
                    className="quantity-button ms-2"
                    type=""
                  >
                    +
                  </Button>
                </div>
              </Form.Item>

              {/* Action buttons */}
              <Button type="primary" className="me-2" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button type="success" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDisplay;
