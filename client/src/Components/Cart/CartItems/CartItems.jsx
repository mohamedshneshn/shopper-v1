import React, { useContext } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./CartItems.css";
import { ShopContext } from "../../../Context/ShopContext";
import removeIcon from "../../../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    all_products,
    cartItems,
    removeFromCart,
    addToCart,
    clearCart,
    deleteItem,
    getTotalCartItems,
    getCartSubtotal,
  } = useContext(ShopContext);

  return (
    <Container className="cart-items mt-5">
      {/* Header row for titles */}
      <Row className="cartitems-format-main text-center d-none d-md-flex">
        <Col sm={3} md={2} lg={2}>
          Product
        </Col>
        <Col sm={3} md={3} lg={3}>
          Title
        </Col>
        <Col sm={3} md={2} lg={2}>
          Price
        </Col>
        <Col sm={3} md={2} lg={2}>
          Quantity
        </Col>
        <Col sm={3} md={2} lg={2}>
          Total
        </Col>
        <Col sm={3} md={1} lg={1}>
          Remove
        </Col>
      </Row>
      <hr className="d-none d-md-block" />

      {/* Render each product in the cart */}
      {all_products.map((product) => {
        const quantity = cartItems[product.id];
        if (quantity > 0) {
          return (
            <>
              <Row
                key={product.id}
                className="cartitems-format mb-3 text-center"
              >
                <Col xs={3} sm={3} md={2} lg={2} className="text-center">
                  <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col xs={9} sm={9} md={3} lg={3}>
                  <p>{product.name}</p>
                </Col>
                <Col xs={12} sm={12} md={2} lg={2} className="">
                  <p>${product.new_price.toFixed(2)}</p>
                </Col>
                <Col xs={4} sm={4} md={2} lg={2}>
                  {/* Quantity control buttons */}
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    disabled={quantity <= 1}
                    onClick={() => removeFromCart(product.id)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </Button>
                </Col>
                <Col xs={4} sm={4} md={2} lg={2}>
                  <p>${(product.new_price * quantity).toFixed(2)}</p>
                </Col>
                <Col xs={4} sm={4} md={1} lg={1}>
                  {/* Remove button */}
                  <Button
                    variant="danger"
                    onClick={() => deleteItem(product.id)}
                  >
                    <Image src={removeIcon} alt="Remove" fluid />
                  </Button>
                </Col>
              </Row>
              <hr />
            </>
          );
        }
        return null;
      })}

      {/* Cart total */}
      <Row className="cart-total  ">
        <Col xs={12} sm={12} md={6} lg={6} className="my-5">
          <div className="">
            <h1 className="mb-5">Cart Totals</h1>
            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p>${getCartSubtotal().toFixed(2)}</p>
            </div>
            <hr className="mt-0" />
            <div className="d-flex justify-content-between">
              <p>Shipping Fee</p>
              <p>$0.00</p>
            </div>
            <hr className="mt-0" />
            <div className="d-flex justify-content-between fw-bold mb-5">
              <p>Total</p>
              <p>${getCartSubtotal().toFixed(2)}</p>
            </div>
            <Button variant="danger">Proceed to Checkout</Button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="my-5 px-5">
          <div className="mt-0 ">
            <p className="fw-bold">
              If you have a coupon code, please apply it below.
            </p>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Coupon code"
                className="form-control"
              />
              <Button variant="outline-secondary">Apply Coupon</Button>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default CartItems;
